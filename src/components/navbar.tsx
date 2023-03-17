import Image from "next/image";
import ToggleThemeButton from "./toggle-theme-btn";

const Navbar = () => {
  return (
    <nav className="flex flex-row py-4">
      <Image src="/logo.svg" alt="Logo of the website" width={20} height={20} />
      Cristina Vidal
      <ul>
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
      <ToggleThemeButton />
    </nav>
  );
};

export default Navbar;
