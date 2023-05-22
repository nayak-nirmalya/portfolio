import React, { createContext, useEffect, useState } from "react";
import { BsSunFill, BsSun } from "react-icons/bs";

import Header from "@components/Header";
import About from "@components/About";
import Projects from "@components/Projects";
import Experience from "@components/Experience";
import Social from "@components/Social";
import Footer from "@components/Footer";
import Skills from "@components/Skills";
import Education from "@components/Education";

type ThemeContextType = "light" | "dark";

export const ThemeContext = createContext<ThemeContextType>("dark");

function App() {
  const [theme, setTheme] = useState<ThemeContextType>("dark");

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
    <ThemeContext.Provider value={theme}>
      <div className="App" id={theme}>
        <div className="switch">
          {theme === "light" ? (
            <BsSun
              size={34}
              onClick={toggleTheme}
              style={{ userSelect: "none", cursor: "pointer" }}
            />
          ) : (
            <BsSunFill
              size={34}
              onClick={toggleTheme}
              style={{ userSelect: "none", cursor: "pointer" }}
            />
          )}
        </div>
        <Header />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Social />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
