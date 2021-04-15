import theme from "../common/styles/theme";
import {
  getNavPages,
  getEntries,
  getEntryByField,
} from "../common/services/contentful";
import { documentToReactComponents as renderRichText } from "@contentful/rich-text-react-renderer";
import Layout from "../common/molecules/layout";
import TextBlock from "../common/organisms/textBlock";

export async function getStaticProps() {
  // Fetch all entries of content_type `blogPost`
  // const data = await getEntry("jHPWJqzEJasCbfzY8UD2n");

  const data = await getEntries({
    content_type: "page",
    "fields.slug": "home",
    include: 10,
  });

  const pages = await getNavPages();

  const home = await getEntryByField("slug", "home");
  return {
    props: {
      home,
      pages,
    },
  };
}

const Home = ({ home, pages }) => {
  return (
    <div className="container">
      <Layout pages={pages}>
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
