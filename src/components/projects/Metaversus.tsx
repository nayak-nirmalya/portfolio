import React from "react";

import metaversus from "@assets/metaversus.png";

const Metaversus = () => {
  return (
    <div className="projects__card">
      <h3>Metaversus Landing Page</h3>
      <img src={metaversus} alt="Metaversus" />
      <p>
        A beautiful, fully responsive, animated Landing Page. Made using Next.js, React, Framer
        Motion & Tailwind.
      </p>
      <div className="centered">
        <a
          href="https://metaverse-landing-smoky.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="button"
        >
          Demo
        </a>
        <a
          href="https://github.com/nayak-nirmalya/metaverse-landing"
          target="_blank"
          rel="noreferrer"
          className="button"
        >
          Code
        </a>
      </div>
    </div>
  );
};

export default Metaversus;
