import React, { useContext } from "react";
import { ThemeContext } from "@/App";

const About = () => {
  const theme = useContext(ThemeContext);

  const scroll = () => {
    const section = document.querySelector("#projects");
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="flex flex-col px-6 lg:px-36">
      <h2 className="mx-auto items-center p-3 text-4xl font-extrabold lg:mx-0 lg:p-6">About Me</h2>
      <p className="text-justify tracking-tight lg:px-16 lg:text-justify lg:text-lg lg:tracking-normal">
        I am a Full Stack / Mobile / Blockchain software developer with experience in building
        modern and scalable Web and Mobile Applications using Express, React, TypeScript, React
        Native, Next.js, TailwindCSS, Node.js, MongoDB, MySQL. I also have skills in building smart
        contracts with Solidity and Front-End that interact with smart contracts on various
        blockchains (Ethereum, Polygon) using Web3 libraries such as Ethers.js, wagmi, web3.js or
        framework such as Hardhat, Truffle, Brownie. Checkout{" "}
        <span className="cursor-pointer select-none font-bold no-underline" onClick={scroll}>
          Projects
        </span>{" "}
        or{" "}
        <a
          className={`font-bold no-underline ${theme === "light" ? "text-black" : "text-white"}`}
          href="https://github.com/nayak-nirmalya"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>{" "}
        to see the source code and live demos.
        <br /> <br />I have a passion for creating user-friendly and responsive interfaces & API
        with super clean, readable, maintainable and scalable code. I enjoy learning new
        technologies and frameworks and applying them to solve real-world problems. I am always
        looking for opportunities to collaborate with other developers and clients on exciting
        projects. If you are looking for a Full Stack / Mobile / Blockchain developer who can
        deliver high-quality results in a timely manner, please feel free to contact me. I would
        love to hear from you and discuss how we can work together.
      </p>
    </section>
  );
};

export default About;
