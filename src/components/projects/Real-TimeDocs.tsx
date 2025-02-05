import React from "react";

import real_time_docs from "@assets/real-time_docs.png";

const RealTimeDocs = () => {
  return (
    <div className="projects__card">
      <h3>Real-Time Docs</h3>
      <img src={real_time_docs} alt="RealTimeDocs" />
      <p>
        A real-time document collaboration platform that lets users effortlessly create, edit, and
        share documents. Built with the Next.js, TypeScript, TailwindCSS, Convex & Clerk.
      </p>
      <div className="centered">
        <a
          href="https://real-time-docs-pi.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="button"
        >
          Demo
        </a>
        <a
          href="https://github.com/nayak-nirmalya/real-time-docs"
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

export default RealTimeDocs;
