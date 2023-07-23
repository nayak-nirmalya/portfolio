import React from "react";

import ai_saas from "../../assets/ai_saas.png";

const AI_SaaS = () => {
  return (
    <div className="projects__card">
      <h3>AI SaaS Platform</h3>
      <img src={ai_saas} alt="AI_SaaS" />
      <p>
        AI Platform to generate Code, Image, Music, Video & Chat using OpenAI & Replicate API.
        Offers monthly subscription, responsive design, a beautiful landing page & customer support.
      </p>
      <div className="centered">
        <a
          href="https://ai-saas-rho.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="button"
        >
          Demo
        </a>
        <a
          href="https://github.com/nayak-nirmalya/ai-saas"
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

export default AI_SaaS;
