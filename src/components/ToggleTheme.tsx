import { ThemeContextType } from "@/App";

import React, { useEffect, useState } from "react";
import { BsSunFill, BsSun } from "react-icons/bs";

interface ToggleThemeProps {
  theme: ThemeContextType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeContextType>>;
}

const ToggleTheme: React.FC<ToggleThemeProps> = ({ theme, setTheme }) => {
  const [effect, setEffect] = useState(false);

  const setBodyColor = ({ color }: { color: string }) => {
    document.documentElement.style.setProperty("--bodyColor", color);
  };

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
      setBodyColor({ color: newTheme === "light" ? "rgb(226 232 240)" : "#0d1117" });
      return newTheme;
    });
  };

  useEffect(() => {
    const localTheme = getThemeInStorage();

    if (localTheme) {
      if (localTheme === "light") {
        setTheme("light");
      } else {
        setTheme("dark");
      }
      setBodyColor({ color: localTheme === "light" ? "rgb(226 232 240)" : "#0d1117" });
    } else {
      setTheme("dark");
      setThemeInStorage("dark");
    }
  }, []);

  return (
    <div className="mx-6 mt-6 flex justify-end lg:mx-52 lg:mt-8">
      {theme === "light" ? (
        <BsSun
          className={`${
            effect && "animate-rotateSwitch"
          } cursor-pointer select-none transition hover:text-gray-700`}
          size={34}
          onClick={() => {
            toggleTheme();
            setEffect(true);
          }}
          onAnimationEnd={() => setEffect(false)}
        />
      ) : (
        <BsSunFill
          className={`${
            effect && "animate-rotateSwitch"
          } cursor-pointer select-none transition hover:text-gray-300`}
          size={34}
          onClick={() => {
            toggleTheme();
            setEffect(true);
          }}
          onAnimationEnd={() => setEffect(false)}
        />
      )}
    </div>
  );
};

export default ToggleTheme;
