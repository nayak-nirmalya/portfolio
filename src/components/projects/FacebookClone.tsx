import React from "react";

import fb_clone from "../../assets/fb_clone.png";

const FacebookClone = () => {
  return (
    <div className="projects__card">
      <h3>Facebook Clone</h3>
      <img src={fb_clone} alt="FacebookClone" />
      <p>
        It&apos;s a Full Stack Facebook Clone, made using Java, SpringBoot, MySQL, lombok, React,
        Next.js, Tailwind CSS, NextAuth. User can be authenticated via OAuth and post with Image.
      </p>
      <div className="centered">
        <a
          href="https://github.com/nayak-nirmalya/fb-clone"
          target="_blank"
          rel="noreferrer"
          className="button"
        >
          Front-End
        </a>
        <a
          href="https://github.com/nayak-nirmalya/fb-clone-spring-boot-java"
          target="_blank"
          rel="noreferrer"
          className="button"
        >
          Back-End
        </a>
      </div>
    </div>
  );
};

export default FacebookClone;
