import React from "react";

const Social = () => {
  return (
    <div className="social">
      <h2 className="font-bold">Socials</h2>

      <div className="centered">
        <a href="mailto:n.nayak263@gmail.com" className="button">
          E-Mail Me!
        </a>
        <a href="tel:+917008944644" className="button">
          Call Me!
        </a>
        <a
          href="https://www.linkedin.com/in/nirmalya-nayak/"
          target="_blank"
          rel="noreferrer"
          className="button"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/nayak-nirmalya"
          target="_blank"
          rel="noreferrer"
          className="button"
        >
          GitHub
        </a>
        <a
          href="https://www.hackerrank.com/n_nayak"
          target="_blank"
          rel="noreferrer"
          className="button"
        >
          HackerRank
        </a>
        <a href="https://wa.me/917008944644" target="_blank" rel="noreferrer" className="button">
          WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Social;
