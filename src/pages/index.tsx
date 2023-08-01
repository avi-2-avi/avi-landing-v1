import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { useTheme } from "next-themes";

import {
  EmailOutlined,
  LinkedIn,
  Telegram,
  LocalLibraryOutlined,
  ElectricScooterOutlined,
  SchoolOutlined,
  AirlineSeatIndividualSuiteOutlined,
  KeyboardAltOutlined,
  AttractionsOutlined,
  ComputerOutlined,
} from "@mui/icons-material";

import Layout from "../components/Layout";
import CheckCard from "@/components/CheckCard";

const Home = () => {
  const { theme } = useTheme();

  return (
    <>
      <Head>
        <title>Cristina Vidal - Home</title>
        <meta name="description" content="Home page for Avi's personal site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="dark-logo.svg" />
      </Head>

      <Layout>
        <section id="title" className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              <h1 className="flex justify-center md:justify-start">
                Cristina Vidal
              </h1>
              <div className="flex justify-center md:justify-start text-center md:text-justify">
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
                    Cloud{" "}
                  </span>
                  )
                </h3>
              </div>
            </div>
            <div className="flex justify-center mt-8 md:mt-0">
              <Image
                src={theme !== "light" ? "dark-drops.svg" : "light-drops.svg"}
                alt="Logo of the website"
                width={160}
                height={160}
                className="mr-4 h-auto w-40"
              />
            </div>
          </div>
        </section>
        <section id="about" className="pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              <h2>About me</h2>
              <p className="py-6 text-justify">
                Cristina Vidal is a Software Technical Engineer specializing in
                Cloud and Networking, and a Systems Engineering student. In her
                free time, she codes, studies for certifications, and makes
                whatever project comes to her mind. She has professional
                experience as a Back-end Engineer and is working towards
                becoming a Solutions Architect.
              </p>
            </div>
            <div className="flex justify-center pt-2 md:pt-14 lg:pt-8 pb-10 px-10">
              <Image
                src="/walking-penguin.gif"
                alt="Penguin walking gif"
                width={250}
                height={250}
                className="w-auto h-48"
              />
            </div>
          </div>
          <p className="flex justify-center text-center">
            Her goal is to find a nice place to grow and work, travel around and
            live calmly.{" "}
          </p>
        </section>
        <section id="hobbies">
          <h2>What I enjoy</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 my-12 md:mx-12">
            <div className="flex flex-col items-center mb-12">
              <p className="mb-2">Reading</p>
              <LocalLibraryOutlined />
            </div>
            <div className="flex flex-col items-center mb-12">
              <p className="mb-2">Coding</p>
              <ComputerOutlined />
            </div>
            <div className="flex flex-col items-center mb-12">
              <p className="mb-2">Learning</p>
              <SchoolOutlined />
            </div>
            <div className="flex flex-col items-center">
              <p className="mb-2">Napping</p>
              <AirlineSeatIndividualSuiteOutlined />
            </div>
            <div className="flex flex-col items-center">
              <p className="mb-2">Touch Typing</p>
              <KeyboardAltOutlined />
            </div>
            <div className="flex flex-col items-center">
              <p className="mb-2">Relaxing</p>
              <AttractionsOutlined />
            </div>
          </div>
        </section>
        <section id="check" className="pb-8 pt-4">
          <h2 className="mb-12">You should check my....</h2>
          <CheckCard
            image="/check-works.png"
            title="Works Portafolio"
            color="yellow"
            reference="/works"
          />
          <CheckCard
            image="/check-tools.png"
            title="Tools for productivity"
            color="red"
            reference="/tools"
          />
          <CheckCard
            image="/check-works.png"
            title="Source Code of projects"
            color="blue"
            reference="https://github.com/avi-2-avi"
          />
        </section>
        <section id="contact" className="pb-12">
          <h2 className="mb-6">How to reach me</h2>
          <div className="flex flex-row space-x-4 py-2">
            <EmailOutlined />
            <Link href="mailto:av95@proton.me">avicon95@proton.me</Link>
          </div>
          <div className="flex flex-row space-x-4 py-2">
            <LinkedIn />
            <Link href="https://www.linkedin.com/in/cristina-vidal-falcon-1063311b1/">
              Cristina Vidal Falcon
            </Link>
          </div>
          <div className="flex flex-row space-x-4 py-2">
            <Telegram />
            <Link href="tg://resolve?domain=av95">@avicon95</Link>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;
