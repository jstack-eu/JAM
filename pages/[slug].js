import theme from "../common/styles/theme";
import { documentToReactComponents as renderRichText } from "@contentful/rich-text-react-renderer";
import { getEntries, getNavPages } from "../common/services/contentful";
import Layout from "../common/molecules/layout";
import BlockGenerator from "../common/molecules/blocksGenerator";

export async function getStaticPaths() {
  let data = await getEntries({
    content_type: "page",
    include: 10,
  });

  return {
    paths: data.items.map((item) => {
      return {
        params: { slug: item.fields.slug || "" },
      };
    }),
    fallback: false,
  };
}

// is going to load the content
export async function getStaticProps({ params }) {
  let data = await getEntries({
    content_type: "page",
    "fields.slug": params.slug,
    include: 10,
  });

  const pages = await getNavPages();

  return {
    props: {
      data: data.items[0],
      pages,
    },
  };
}

export const Page = ({ data, pages }) => {
  return (
    <div className="container">
      <Layout pages={pages} config={config}>
        {data?.fields?.block && <BlockGenerator data={data.fields.block} />}
      </Layout>

      <style jsx>{``}</style>
    </div>
  );
};

export default Page;
