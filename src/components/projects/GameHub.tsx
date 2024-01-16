import React from "react";

import twitch_clone from "@assets/twitch_clone.png";

const GameHub = () => {
  return (
    <div className="projects__card">
      <h3>GameHub - Twitch Clone</h3>
      <img src={twitch_clone} alt="GameHub" />
      <p>
        FullStack Twitch Clone with Next.js 14, React, Prisma, Stripe, Tailwind, shadcn/ui, MySQL &
        TypeScript. Go live using RTMP / WHIP protocols with OBS & chat with viewers.
      </p>
      <div className="centered">
        <a
          href="https://twitch-clone-orcin.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="button"
        >
          Demo
        </a>
        <a
          href="https://github.com/nayak-nirmalya/twitch-clone"
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

export default GameHub;
