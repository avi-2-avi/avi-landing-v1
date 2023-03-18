import Head from "next/head";
import Layout from "../components/layout";
import Image from "next/image";
import { useTheme } from "next-themes";

const Home = () => {
  const { theme } = useTheme();

  return (
    <>
      <Head>
        <title>Cristina Vidal • Home</title>
        <meta name="description" content="Home page for Avi's personal site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="dark-logo.svg" />
      </Head>

      <Layout>
        <section id="about" className="py-12">
          <div className="flex flex-row">
            <div className="basis-1/2">
              <h1>Cristina Vidal</h1>
              <h3 className="pt-4 font-medium">
                Multi Engineer (
                <span className="text-yellow-light dark:text-yellow-dark">
                  {" "}
                  Software{" "}
                </span>
                /
                <span className="text-red-light dark:text-red-dark">
                  {" "}
                  Systems{" "}
                </span>
                /
                <span className="text-blue-light dark:text-blue-dark">
                  {" "}
                  Industrial{" "}
                </span>
                )
              </h3>
            </div>
            <div className="basis-1/2 flex justify-center">
              <Image
                src={theme !== "light" ? "dark-drops.svg" : "light-drops.svg"}
                alt="Logo of the website"
                width={160}
                height={160}
                className="mr-4"
              />
            </div>
          </div>
        </section>
        <h2>Cristina Vidal</h2>
      </Layout>
    </>
  );
};

export default Home;
