// import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

const ToggleThemeButton = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (currentTheme === "dark") {
    return (
      <LightModeOutlinedIcon
        className="w-7 h-7"
        onClick={() => setTheme("light")}
      />
    );
  } else {
    return (
      <DarkModeOutlinedIcon
        className="w-7 h-7"
        onClick={() => setTheme("dark")}
      />
    );
  }
};

export default ToggleThemeButton;
