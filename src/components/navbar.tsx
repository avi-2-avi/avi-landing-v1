import Image from "next/image";
import ToggleThemeButton from "./toggle-theme-btn";

const Navbar = () => {
  return (
    <nav className="container px-32 py-4 flex justify-between items-center">
      <div className="flex space-x-20">
        <Image
          src="/logo.svg"
          alt="Logo of the website"
          width={20}
          height={20}
          className="mr-4"
        />
        Cristina Vidal
        <ul className="flex flex-row space-x-20">
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/works">Works</a>
          </li>
          <li>
            <a href="/tools">Tools</a>
          </li>
          <li>
            <a href="https://github.com/avi-2-avi">Source</a>
          </li>
        </ul>
      </div>
      <ToggleThemeButton />
    </nav>
  );
};

export default Navbar;
