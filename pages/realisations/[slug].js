import theme from "../../styles/theme";

import {
  getEntries,
  getNavPages,
  getGeneralInfo,
} from "../../services/contentful";
import Layout from "../../domains/general/molecules/layout";
import BasicSection from "../../domains/general/organisms/basicSection";

export async function getStaticPaths({ locales }) {
  let data = await getEntries({
    content_type: "realisation",
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

export async function getStaticProps({ locale, params }) {
  const info = await getGeneralInfo();
  const pages = await getNavPages();
  const realisation = await getEntries({
    content_type: "realisation",
    "fields.slug": params.slug,
    include: 10,
  });

  return {
    props: {
      info: info,
      locale: locale,
      fields: realisation.items[0].fields,
      pages: pages.map((p) => {
        p.label = p.fields[`title${locale[0].toUpperCase() + locale.slice(1)}`];
        if (!p.label) p.label = p.fields.titleNl || "untitled";
        return p;
      }),
    },
  };
}

export const Realisation = ({ config, fields, pages, locale, info }) => {
  const getPropByLocale = (fields, key) => {
    if (locale === "nl") {
      return (
        fields[key] || fields[key + (locale[0].toUpperCase() + locale.slice(1))]
      );
    }

    return fields[key + (locale[0].toUpperCase() + locale.slice(1))];
  };
  return (
    <div>
      <Layout
        pages={pages}
        config={config}
        locale={locale}
        info={info}
        inversedHeader
      >
        <div className="container">
          <BasicSection
            isRealisation
            title={getPropByLocale(fields, "title")}
            content={fields.content}
            image={fields.image}
          />
        </div>
      </Layout>

      <style jsx>{`
        .container {
          display: flex;
          width: ${theme.layout.containerWidth};
          margin-left: auto;
          margin-right: auto;
          flex-direction: row;
        }
        @media screen and (max-width: ${theme.media.l}px) { 
          .container {
          width: 100%;
          padding-left: ${theme.margin.xl};
          padding-right: ${theme.margin.xl};
        }
        }
      `}</style>
    </div>
  );
};

export default Realisation;
