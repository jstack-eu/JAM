import theme from "../styles/theme";

import {
  getEntries,
  getNavPages,
  getGeneralInfo,
} from "../services/contentful";
import Layout from "../domains/general/molecules/layout";
import SectionsGenerator from "../domains/general/molecules/sectionsGenerator";
import Contact from "../domains/general/organisms/contact";

// const contentfulImport = require("contentful-import");

// const options = {
//   contentFile: "./cms-data.json",
//   spaceId: "gdied21sl5zt",
//   managementToken: "CFPAT-t8cewvJim0fdhd7IG4L-moHBSjGa3SXLPG_nzb3D5Os",
// };

export async function getStaticPaths({ locales }) {
  console.log("...", locales);
  let data = await getEntries({
    content_type: "page",
    include: 10,
  });

  const itemsWithLocales = data.items.flatMap((item) => {
    return locales.map((l) => {
      return { ...item, locale: l };
    });
  });

  return {
    paths: itemsWithLocales.map((item) => {
      return {
        params: { slug: item.fields.slug || "" },
        locale: item.locale,
      };
    }),
    fallback: false,
  };
}

// We need to fetch data that is used in multiple pages in every single page
// Currently the biggest issue in next...
// https://github.com/vercel/next.js/discussions/10949

// is going to load the content
export async function getStaticProps({ params, locale }) {
  let data = await getEntries({
    content_type: "page",
    "fields.slug": params.slug,
    include: 10,
  });

  // contentfulImport(options)
  //   .then(() => {
  //     console.log("Data imported successfully");
  //   })
  //   .catch((err) => {
  //     console.log("Oh no! Some errors occurred!", err);
  //   });

  let realisations;

  if (params.slug === "realisations") {
    realisations = await getEntries({
      content_type: "realisation",
      include: 10,
    });
  }

  const pages = await getNavPages();
  const info = await getGeneralInfo();

  // pages are only passed to feed the navigation block
  return {
    props: {
      data: data.items[0],
      locale: locale,
      info: info,
      realisations: realisations ? realisations : null,
      pages: pages.map((p) => {
        p.label = p.fields[`title${locale[0].toUpperCase() + locale.slice(1)}`];
        if (!p.label) p.label = p.fields.titleNl || "untitled";
        return p;
      }),
    },
  };
}

export const Page = ({ data, realisations, config, pages, locale, info }) => {
  const hasHero = (block) => {
    return block?.sys?.contentType?.sys?.id === "sectionHero";
  };
  const renderContent = () => {
    if (data.fields.slug === "contact") {
      return <Contact data={info} locale={locale} />;
    }
    {
      return (
        data?.fields?.blocks?.length && (
          <SectionsGenerator
            realisations={realisations ? realisations.items : []}
            data={data.fields.blocks}
            locale={locale}
          />
        )
      );
    }
  };
  return (
    <div className="container">
      <Layout
        pages={pages}
        config={config}
        locale={locale}
        info={info}
        inversedHeader={
          !hasHero(data?.fields?.blocks?.length && data?.fields?.blocks[0])
        }
      >
        {renderContent()}
      </Layout>

      <style jsx>{``}</style>
    </div>
  );
};

export default Page;
