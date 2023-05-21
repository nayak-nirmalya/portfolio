import React from "react";

import twitter_clone from "../../assets/twitter_clone.png";

const TwitterClone = () => {
  return (
    <div className="projects__card">
      <h3>Twitter Clone - NextJS</h3>
      <img src={twitter_clone} alt="TwitterClone" />
      <p>
        Full Stack Responsive Twitter Clone Made using React, NextJS, TailwindCSS, TypeScript,
        MongoDB & Prisma. Funcionalities includes Notification, Following / Liking / Commenting.
      </p>
      <div className="centered">
        <a
          href="https://twitter-clone-snowy-xi.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="button"
        >
          Demo
        </a>
        <a
          href="https://github.com/nayak-nirmalya/twitter-clone"
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

export default TwitterClone;
