import { Poppins } from "next/font/google";
import { ReactNode } from "react";
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
  return (
    <div className="flex flex-col min-h-screen">
      <main className={`${poppins.className} font-sans flex-grow`}>
        <Navbar />
        <div className="container px-4 xs:px-8 sm:px-10 md:max-w-2xl xl:max-w-4xl mx-auto">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
