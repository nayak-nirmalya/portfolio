const About = () => {
  const scroll = () => {
    const section = document.querySelector(".projects");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="about">
      <h2>About Me</h2>

      <p>
        I am a Full Stack / Blockchain software developer with experience in
        building modern and scalable web applications using React, TypeScript,
        Next.js, TailwindCSS, Node, MongoDB, MySQL also I build smart contracts
        with Solidiy and Front-End that interact with smart contracts on various
        blockchains (Ethereum) using Web3 libraries such as ethers.js, web3.js
        or framework such as Hardhat, Truffle, Brownie. Checkout{" "}
        <span
          style={{
            fontWeight: "bold",
            textDecoration: "none",
            cursor: "pointer",
          }}
          onClick={scroll}
        >
          Projects
        </span>{" "}
        or{" "}
        <a
          style={{
            fontWeight: "bold",
            textDecoration: "none",
            color: "white",
          }}
          href="https://github.com/nayak-nirmalya"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>{" "}
        to see the source code and live demos.
        <br /> <br />I have a passion for creating user-friendly and responsive
        interfaces with clean, maintainable and scalable code. I enjoy learning
        new technologies and frameworks and applying them to solve real-world
        problems. I am always looking for opportunities to collaborate with
        other developers and clients on exciting projects. If you are looking
        for a Full Stack or Blockchain developer who can deliver high-quality
        results in a timely manner, please feel free to contact me. I would love
        to hear from you and discuss how we can work together.
      </p>
    </section>
  );
};

export default About;
