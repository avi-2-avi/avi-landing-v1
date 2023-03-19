import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const Footer = () => {
  return (
    <div
      className={`${poppins.className} flex justify-center pb-8 text-center`}
    >
      © {new Date().getFullYear()} Cristina Vidal. All Rights Reserved.
    </div>
  );
};

export default Footer;
