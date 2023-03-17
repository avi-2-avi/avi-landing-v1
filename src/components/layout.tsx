import { Poppins } from "next/font/google";
import Navbar from "./navbar";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const Layout = ({ children }) => {
  return (
    <>
      <main className={`${poppins.className} font-sans`}>
        <Navbar />
        {children}
        <div className="flex justify-center py-10">
          © 2023 Cristina Vidal. All Rights Reserved.
        </div>
      </main>
    </>
  );
};

export default Layout;