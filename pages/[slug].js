import theme from '../styles/theme';
import {documentToReactComponents as renderRichText} from '@contentful/rich-text-react-renderer';
import {getEntries} from '../services/contentful';

export async function getStaticPaths() {
  let data = await getEntries({
    content_type: 'page',
  });

  console.log('DDATA: ', data);
  console.log('DDATA 2: ', data.items);
  console.log('DDATA 3: ', data.items[0].fields);

  return {
    paths: data.items.map((item) => {
      console.log('-------------', item.fields);
      return {
        params: {slug: item.fields.slug || ''},
      };
    }),
    fallback: false,
  };
}

// is going to load the content
export async function getStaticProps({params}) {
  let data = await getEntries({
    content_type: 'page',
    'fields.slug': params.slug,
  });

  return {
    props: {
      data: data.items[0],
    },
  };
}

export const Page = ({data}) => {
  console.log({data});
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

export default Page;
