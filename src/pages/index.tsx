import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { useTheme } from "next-themes";

import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import ElectricScooterOutlinedIcon from "@mui/icons-material/ElectricScooterOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import AirlineSeatIndividualSuiteOutlinedIcon from "@mui/icons-material/AirlineSeatIndividualSuiteOutlined";
import KeyboardAltOutlinedIcon from "@mui/icons-material/KeyboardAltOutlined";
import AttractionsOutlinedIcon from "@mui/icons-material/AttractionsOutlined";

import Layout from "../components/layout";

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
                    Industrial{" "}
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
        <section id="about" className="pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div>
              <h2>About me</h2>
              <p className="py-6 text-justify">
                Cristina Vidal is currently a student of Systems Engineering who
                got the opportunity to study a second career, Industrial
                Engineering. In her free time, she code, learns systems design
                and makes whatever project comes to her mind. She has worked in
                the past as a Back-end Engineer and is working towards becoming
                a Full Stack Engineer in the future.
              </p>
            </div>
            <div className="flex justify-center pt-2 md:pt-14 lg:pt-8 pb-10 px-10">
              <Image
                src="/walking-penguin.gif"
                alt="Penguin walking gif"
                width={250}
                height={250}
                className="h-auto w-30"
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
              <LocalLibraryOutlinedIcon />
            </div>
            <div className="flex flex-col items-center mb-12">
              <p className="mb-2">Riding scooter</p>
              <ElectricScooterOutlinedIcon />
            </div>
            <div className="flex flex-col items-center mb-12">
              <p className="mb-2">Learning</p>
              <SchoolOutlinedIcon />
            </div>
            <div className="flex flex-col items-center">
              <p className="mb-2">Napping</p>
              <AirlineSeatIndividualSuiteOutlinedIcon />
            </div>
            <div className="flex flex-col items-center">
              <p className="mb-2">Touch Typing</p>
              <KeyboardAltOutlinedIcon />
            </div>
            <div className="flex flex-col items-center">
              <p className="mb-2">Relaxing</p>
              <AttractionsOutlinedIcon />
            </div>
          </div>
        </section>
        <section id="contact" className="pb-12">
          <h2 className="mb-6">How to reach me</h2>
          <div className="flex flex-row space-x-4 py-2">
            <EmailOutlinedIcon />
            <Link href="mailto:avicon95@proton.me">avicon95@proton.me</Link>
          </div>
          <div className="flex flex-row space-x-4 py-2">
            <LinkedInIcon />
            <Link href="https://www.linkedin.com/in/cristina-vidal-falcon-1063311b1/">
              Cristina Vidal Falcon
            </Link>
          </div>
          <div className="flex flex-row space-x-4 py-2">
            <TelegramIcon />
            <Link href="tg://resolve?domain=avicon95">@avicon95</Link>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;
