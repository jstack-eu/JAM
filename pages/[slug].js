import theme from "../common/styles/theme";
import { documentToReactComponents as renderRichText } from "@contentful/rich-text-react-renderer";
import {
  getEntries,
  getConfig,
  getNavPages,
} from "../common/services/contentful";
import Layout from "../common/molecules/layout";
import TextBlock from "../common/organisms/textBlock";

export async function getStaticPaths() {
  let data = await getEntries({
    content_type: "page",
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
  });

  const config = await getConfig();

  const pages = await getNavPages();

  return {
    props: {
      data: data.items[0],
      config,
      pages,
    },
  };
}

export const Page = ({ data, config, pages }) => {
  console.log("data: ", data.fields);
  return (
    <div className="container">
      <Layout pages={pages} config={config}>
        {data?.fields?.block && (
          <TextBlock
            title={data.fields.block[0].fields.title}
            content={data.fields.block[0].fields.content}
          />
        )}
      </Layout>

      <style jsx>{`
        .catchphrase {
          margin-top: 180px;
          font-family: "Source Serif Pro, serif";
          font-size: ${theme.fontSize.catchphrase};
        }
      `}</style>
    </div>
  );
};

export default Page;
