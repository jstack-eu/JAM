import theme from "../common/styles/theme";
import {
  getNavPages,
  getConfig,
  getEntries,
  getEntryByField,
} from "../common/services/contentful";
import { documentToReactComponents as renderRichText } from "@contentful/rich-text-react-renderer";
import Layout from "../common/molecules/layout";
import TextBlock from "../common/organisms/textBlock";

export async function getStaticProps() {
  const config = await getConfig();
  const pages = await getNavPages();
  const home = await getEntryByField("slug", "home", "page");

  return {
    props: {
      config,
      home,
      pages,
    },
  };
}

const Home = ({ home, pages, config }) => {
  console.log("config: ", config);
  return (
    <div className="container">
      <Layout pages={pages} config={config}>
        <TextBlock
          title={home.fields.block[0].fields.title}
          content={home.fields.block[0].fields.content}
        />
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

export default Home;
