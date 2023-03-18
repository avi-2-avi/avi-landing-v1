import Layout from "@/components/Layout";
import Image from "next/image";

const NotFound = () => {
  return (
    <Layout>
      <div className="flex flex-col w-max mx-auto text-center mb-2 mt-20">
        <Image
          src="/winter-penguin.gif"
          alt="Penguin walking gif"
          width={400}
          height={250}
          className="h-auto w-72 xs:w-80 md:w-96"
        />
      </div>
      <div className="flex flex-col text-center">
        <h1 className="text-5xl mt-10 mb-6">404</h1>
        <p>The page you're looking for does not exist.</p>
        <div className="bg-foreground-light dark:bg-foreground-dark h-0.5 opacity-10 w-60 xs:w-96 mx-auto my-8" />
        <button className="mx-auto py-2 w-40 rounded-md hover:opacity-90 font-medium bg-blue-light dark:bg-blue-dark text-background-light dark:text-background-dark mb-12">
          Return to home
        </button>
      </div>
    </Layout>
  );
};

export default NotFound;
