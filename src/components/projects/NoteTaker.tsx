import React from "react";

import note_taker from "@assets/note_taker.png";

const NoteTaker = () => {
  return (
    <div className="projects__card">
      <h3>NoteTaker App</h3>
      <img src={note_taker} alt="NoteTaker App" />
      <p>
        A simple single page Note Taking Web App made with Create T3 App, NextAuth, Prisma, Tailwind
        (DaisyUI), TypeScript and tRPC. Here we are using Supabase as BaaS.
      </p>
      <div className="centered">
        <a
          href="https://note-taker-eight.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="button"
        >
          Demo
        </a>
        <a
          href="https://github.com/nayak-nirmalya/note-taker"
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

export default NoteTaker;
