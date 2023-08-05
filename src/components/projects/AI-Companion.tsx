import React from "react";

import ai_companion from "@assets/ai_companion.png";

const AI_Companion = () => {
  return (
    <div className="projects__card">
      <h3>AI Companion</h3>
      <img src={ai_companion} alt="AI_Companion" />
      <p>
        Create personalized AI charecters as your companion & chat with them, ask questions. Made
        using Next.js, Tailwind, Prisma, Stripe, PlanetScale, Upstash & Replicate API.
      </p>
      <div className="centered">
        <a
          href="https://ai-companion-beige.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="button"
        >
          Demo
        </a>
        <a
          href="https://github.com/nayak-nirmalya/ai-companion"
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

export default AI_Companion;
