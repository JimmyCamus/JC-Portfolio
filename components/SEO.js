import Head from "next/head";

const SEO = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default SEO;
