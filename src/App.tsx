import React, { createContext, useState } from "react";

import Header from "@components/Header";
import About from "@components/About";
import Projects from "@components/Projects";
import Experience from "@components/Experience";
import Social from "@components/Social";
import Footer from "@components/Footer";
import Skills from "@components/Skills";
import Education from "@components/Education";
import ScrollToTop from "./components/ScrollToTop";
import ToggleTheme from "./components/ToggleTheme";

export type ThemeContextType = "light" | "dark";

export const ThemeContext = createContext<ThemeContextType>("dark");

function App() {
  const [theme, setTheme] = useState<ThemeContextType>("dark");

  return (
    <ThemeContext.Provider value={theme}>
      <div className="flex flex-col gap-y-4 lg:gap-y-8" id={theme}>
        <ToggleTheme theme={theme} setTheme={setTheme} />
        <ScrollToTop />
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
