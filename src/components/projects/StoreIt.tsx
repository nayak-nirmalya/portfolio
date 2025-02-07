import React from "react";

import store_it from "@assets/store_it.png";

const StoreIt = () => {
  return (
    <div className="projects__card">
      <h3>StoreIt</h3>
      <img src={store_it} alt="StoreIt" />
      <p>
        A storage management and file sharing platform that lets users effortlessly upload,
        organize, and share files. Built with Next.js, TypeScript, TailwindCSS and Appwrite SDK.
      </p>
      <div className="centered">
        <a
          href="https://store-it-pink.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="button"
        >
          Demo
        </a>
        <a
          href="https://github.com/nayak-nirmalya/store_it"
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

export default StoreIt;
