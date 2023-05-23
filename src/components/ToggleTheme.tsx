import { ThemeContextType } from "@/App";

import React, { useEffect } from "react";
import { BsSunFill, BsSun } from "react-icons/bs";

interface ToggleThemeProps {
  theme: ThemeContextType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeContextType>>;
}

const ToggleTheme: React.FC<ToggleThemeProps> = ({ theme, setTheme }) => {
  const setThemeInStorage = (theme: string) => {
    localStorage.setItem("theme", theme);
  };

  const getThemeInStorage = () => {
    return localStorage.getItem("theme");
  };

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      const newTheme = currentTheme === "light" ? "dark" : "light";
      setThemeInStorage(newTheme);
      return newTheme;
    });
  };

  useEffect(() => {
    const localTheme = getThemeInStorage();

    if (localTheme) {
      localTheme === "light" ? setTheme("light") : setTheme("dark");
    } else {
      setTheme("dark");
      setThemeInStorage("dark");
    }
  }, []);

  return (
    <div className="mx-8 flex justify-end p-4 lg:mx-52">
      {theme === "light" ? (
        <BsSun size={34} onClick={toggleTheme} style={{ userSelect: "none", cursor: "pointer" }} />
      ) : (
        <BsSunFill
          size={34}
          onClick={toggleTheme}
          style={{ userSelect: "none", cursor: "pointer" }}
        />
      )}
    </div>
  );
};

export default ToggleTheme;
