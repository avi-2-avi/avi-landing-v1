import Head from "next/head";
import WideLayout from "@/components/WideLayout";
import ToolCard from "@/components/ToolCard";
import toolsList from "@/data/toolsList";

const Tools = () => {
  return (
    <>
      <Head>
        <title>Cristina Vidal - Tools</title>
        <meta name="description" content="Home page for Avi's personal site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="dark-logo.svg" />
      </Head>

      <WideLayout>
        <div className="flex flex-col text-center my-12 px-6">
          <h1 className="mb-4">Tools for productivity</h1>
          <h3>
            List of{" "}
            <span className="text-blue-light dark:text-blue-dark">tools</span> I
            use everyday that make my life easier
          </h3>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 pb-12 ">
          {toolsList.map(({ title, description, image, color }, index) => (
            <ToolCard
              key={index}
              title={title}
              description={description}
              image={image}
              color={color}
            />
          ))}
        </div>
      </WideLayout>
    </>
  );
};

export default Tools;
