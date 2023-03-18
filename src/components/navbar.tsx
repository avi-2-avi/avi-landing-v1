import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import ToggleThemeButton from "./toggle-theme-btn";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useState } from "react";

import "animate.css";

const Navbar = () => {
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const onToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className="py-4 flex justify-between mx-4 xs:mx-8 sm:mx-10 md:mx-0 md:justify-evenly 
      items-center font-medium"
    >
      <div className="flex md:space-x-16 lg:space-x-20">
        <div className="flex flex-row">
          <Image
            src={theme !== "light" ? "dark-logo.svg" : "light-logo.svg"}
            alt="Logo of the website"
            width={20}
            height={20}
            className="mr-4"
          />
          Cristina Vidal
        </div>
        <div className="hidden md:flex md:flex-row md:space-x-10 lg:space-x-16">
          <Link
            className={
              router.pathname === "/"
                ? "text-yellow-light dark:text-yellow-dark"
                : "hover:opacity-90"
            }
            href="/"
          >
            About
          </Link>
          <Link
            className={
              router.pathname === "/works"
                ? "text-red-light dark:text-red-dark"
                : "hover:opacity-90"
            }
            href="/works"
          >
            Works
          </Link>
          <Link
            className={
              router.pathname === "/tools"
                ? "text-blue-light dark:text-blue-dark"
                : "hover:opacity-90"
            }
            href="/tools"
          >
            Tools
          </Link>
          <Link
            className="hover:opacity-90"
            href="https://github.com/avi-2-avi"
          >
            Source
          </Link>
        </div>
      </div>
      <div className="flex space-x-4">
        <ToggleThemeButton />
        <MenuOutlinedIcon
          className="w-7 h-7 cursor-pointer md:hidden block"
          onClick={onToggleMenu}
        />
        <div
          className={`${isMenuOpen ? "block" : "hidden"} 
          text-background-light dark:text-background-dark
          z-10 mt-10 fixed flex flex-col md:hidden 
          animate__animated animate__fadeIn animate__faster`}
        >
          <Link
            className="bg-yellow-light dark:bg-yellow-dark px-3 py-2"
            href="/"
          >
            About
          </Link>
          <Link
            className="bg-red-light dark:bg-red-dark px-3 py-2"
            href="/works"
          >
            Works
          </Link>
          <Link
            className="bg-blue-light dark:bg-blue-dark px-3 py-2"
            href="/tools"
          >
            Tools
          </Link>
          <Link
            className="bg-foreground-light dark:bg-foreground-dark px-3 py-2"
            href="https://github.com/avi-2-avi"
          >
            Source
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
