import Head from "next/head";
import Layout from "../components/layout";

const Home = () => {
  return (
    <>
      <Head>
        <title>Cristina Vidal • Home</title>
        <meta name="description" content="Home page for Avi's personal site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="dark-logo.svg" />
      </Head>

      <Layout>
        <h1>Hello worlddd</h1>
      </Layout>
    </>
  );
};

export default Home;
