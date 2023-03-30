import WideLayout from "@/components/WideLayout";
import worksList from "../data/worksList";

import Head from "next/head";
import Link from "next/link";

import { LaunchOutlined, GitHub } from "@mui/icons-material";

const Works = () => {
  return (
    <>
      <Head>
        <title>Cristina Vidal - Works</title>
        <meta name="description" content="Home page for Avi's personal site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="dark-logo.svg" />
      </Head>
      <WideLayout>
        <div className="flex flex-col text-center md:text-start mx-4 my-12">
          <h1 className="mb-4">Works Portafolio</h1>
          <h3>
            List of{" "}
            <span className="text-red-light dark:text-red-dark">stuff</span> I
            have made
          </h3>
        </div>
        <table>
          <thead>
            <tr>
              <th className="xl:w-1/12">Year</th>
              <th className="xl:w-3/12">Title</th>
              <th className="xl:w-2/12 hidden md:table-cell">Made at</th>
              <th className="xl:w-4/12 hidden md:table-cell">Built with</th>
              <th className="xl:w-1/12">Link</th>
            </tr>
          </thead>
          <tbody>
            {worksList
              .sort((a, b) => b.year - a.year)
              .map((work, index) => (
                <tr
                  key={index}
                  className={`${
                    (index + 1) % 3 === 0
                      ? "text-blue-light dark:text-blue-dark"
                      : (index + 1) % 2 === 0
                      ? "text-red-light dark:text-red-dark"
                      : "text-yellow-light dark:text-yellow-dark"
                  } hover:bg-foreground-dark hover:dark:bg-foreground-light`}
                >
                  <td className="font-medium">{work.year}</td>
                  <td className="font-medium">{work.title}</td>
                  <td className="hidden md:table-cell">{work.made_at}</td>
                  <td className="hidden md:table-cell">
                    {work.built_with.map((tech, index) => (
                      <span key={index} className="text-sm">
                        {tech}{" "}
                        {index !== work.built_with.length - 1 ? " · " : ""}
                      </span>
                    ))}
                  </td>
                  <td className="space-x-2 xs:space-x-3">
                    {work.links.presentation !== undefined && (
                      <Link
                        href={work.links.presentation}
                        className="hover:text-foreground-light hover:dark:text-foreground-dark"
                      >
                        <LaunchOutlined className="w-[22px] xs:w-[24px]" />
                      </Link>
                    )}
                    {work.links.source !== undefined && (
                      <Link
                        href={work.links.source}
                        className="hover:text-foreground-light hover:dark:text-foreground-dark"
                      >
                        <GitHub className="w-[18px] xs:w-[24px]" />
                      </Link>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </WideLayout>
    </>
  );
};

export default Works;
