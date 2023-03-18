import { Poppins } from "next/font/google";
import { ReactNode } from "react";
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
    <>
      <main className={`${poppins.className} font-sans`}>
        <Navbar />
        <div className="container px-4 xs:px-8 sm:px-10 md:max-w-2xl xl:max-w-4xl mx-auto">
          {children}
        </div>
        <div className="flex justify-center py-10 text-center">
          © {new Date().getFullYear()} Cristina Vidal. All Rights Reserved.
        </div>
      </main>
    </>
  );
};

export default Layout;
