import "../common/styles/globals.css";


// import { getNavPages } from "../common/services/contentful";

// export async function getInitialProps() {
//   let pages = await getNavPages();

//   return {
//     props: {
//       pages: pages,
//     },
//   };
// }

function MyApp({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  );
}

export default MyApp;
