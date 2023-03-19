import { Poppins } from "next/font/google";
import { ReactNode, useEffect, useState } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <div className="flex flex-col min-h-screen">
      <main className={`${poppins.className} font-sans flex-grow`}>
        <Navbar />
        <div
          className={`opacity-0 transition-opacity ${
            loaded ? "opacity-100" : ""
          } duration-500 container w-full`}
        >
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
