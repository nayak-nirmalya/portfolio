import { createContext, useState } from "react";
import ReactSwitch from "react-switch";

import { BsSunFill, BsSun } from "react-icons/bs";

// Import Components
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Social from "./components/Social";
import Footer from "./components/Footer";
import Skills from "./components/Slills";
import Education from "./components/Education";

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
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
