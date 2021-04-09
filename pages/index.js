import theme from '../styles/theme';
import {getEntry} from '../services/contentful';
import {documentToReactComponents as renderRichText} from '@contentful/rich-text-react-renderer';

export async function getStaticProps() {
  // Fetch all entries of content_type `blogPost`
  const data = await getEntry('jHPWJqzEJasCbfzY8UD2n');

  return {
    props: {
      data,
    },
  };
}

const Home = ({data}) => {
  // console.log('1: ', process.env.CF_SPACE_ID);
  // console.log('2: ', data);
  // console.log('3: ', data.fields);
  // console.log('4: ', data.fields.block);
  // console.log('5: ', data.fields.block[0].fields.title);

  return (
    <div className="container">
      <div className="home">
        <h1>{data.fields.block[0].fields.title}</h1>
        {renderRichText(data.fields.block[0].fields.content)}
      </div>

      <style jsx>{`
        .catchphrase {
          margin-top: 180px;
          font-family: 'Source Serif Pro, serif';
          font-size: ${theme.fontSize.catchphrase};
        }
      `}</style>
    </div>
  );
};

export default Home;
