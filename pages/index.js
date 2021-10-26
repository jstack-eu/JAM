import React, { useState, useEffect } from "react";
import Head from "next/head";
import { getEntryByField } from "../services/contentful";
import Layout from "../domains/general/molecules/layout";
import SectionGenerator from "../domains/general/molecules/sectionGenerator";
import { useRouter } from "next/router";

// export async function getStaticProps({}) {
//   // let data = await getEntryByField('slug', 'index', 'page');

//   // return {
//   //   props: {
//   //     data: data.items[0],
//   //   },
//   // };
// }

export default function Home({ data }) {
  // const fields = data.fields;
  const router = useRouter();
  const test = useEffect(() => {
    router.push(`/home`);
  });

  return (
    <div>
      {/* TODO: add Head to Layout */}
      {/* <Head>
        <title>{fields.title}</title>
        <meta name="description" content={fields.metaDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      {/* <Layout>{fields?.blocks && <SectionGenerator data={fields.blocks} />}</Layout> */}
    </div>
  );
}
