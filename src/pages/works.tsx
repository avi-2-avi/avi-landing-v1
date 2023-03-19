import TableLayout from "@/components/TableLayout";
import Head from "next/head";

const dummyData = [
  {
    id: 0,
    year: 2022,
    title: "Notes in Django",
    made_at: "-",
    built_with: ["React", "Django"],
    links: [
      {
        source: "https://github.com/avi-2-avi",
        presentation: "https://google.com",
        design: "https://brave.com",
      },
    ],
  },
  {
    id: 1,
    year: 2022,
    title: "Notes in Django",
    made_at: "-",
    built_with: ["React", "Django"],
    links: [
      {
        source: "https://github.com/avi-2-avi",
        presentation: "https://google.com",
        design: "https://brave.com",
      },
    ],
  },
  {
    id: 2,
    year: 2022,
    title: "Notes in Django",
    made_at: "-",
    built_with: ["React", "Django"],
    links: [
      {
        source: "https://github.com/avi-2-avi",
        presentation: "https://google.com",
        design: "https://brave.com",
      },
    ],
  },
  {
    id: 3,
    year: 2022,
    title: "Notes in Django",
    made_at: "-",
    built_with: ["React", "Django"],
    links: [
      {
        source: "https://github.com/avi-2-avi",
        presentation: "https://google.com",
        design: "https://brave.com",
      },
    ],
  },
  {
    id: 4,
    year: 2022,
    title: "Notes in Django",
    made_at: "-",
    built_with: ["React", "Django"],
    links: [
      {
        source: "https://github.com/avi-2-avi",
        presentation: "https://google.com",
        design: "https://brave.com",
      },
    ],
  },
];

const Works = () => {
  return (
    <>
      <Head>
        <title>Cristina Vidal • Works</title>
        <meta name="description" content="Home page for Avi's personal site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="dark-logo.svg" />
      </Head>
      <TableLayout>
        <div className="flex flex-col text-center md:text-start mx-4 my-12">
          <h1>Works Portafolio</h1>
          <h3>
            List of{" "}
            <span className="text-red-light dark:text-red-dark">stuff</span> I
            have made
          </h3>
        </div>
        <table>
          <thead>
            <tr>
              <th className="w-1/12">Year</th>
              <th className="w-4/12">Title</th>
              <th className="w-2/12 hidden md:table-cell">Made at</th>
              <th className="w-4/12 hidden md:table-cell">Built with</th>
              <th className="w-1/12">Link</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.map((data, index) => (
              <tr
                key={data.id}
                className={`${
                  (index + 1) % 3 === 0
                    ? "text-blue-light dark:text-blue-dark"
                    : (index + 1) % 2 === 0
                    ? "text-red-light dark:text-red-dark"
                    : "text-yellow-light dark:text-yellow-dark"
                } hover:bg-foreground-dark hover:dark:bg-foreground-light`}
              >
                <td className="font-medium">{data.year}</td>
                <td className="font-medium">{data.title}</td>
                <td className="hidden md:table-cell">{data.made_at}</td>
                <td className="hidden md:table-cell">
                  {data.built_with.map((tech, index) => (
                    <span key={index} className="text-sm">
                      {tech} {index !== data.built_with.length - 1 ? " · " : ""}
                    </span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableLayout>
    </>
  );
};

export default Works;
