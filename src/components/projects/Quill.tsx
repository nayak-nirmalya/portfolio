import React from "react";

import quill from "@assets/quill.png";

const Quill = () => {
  return (
    <div className="projects__card">
      <h3>Quill</h3>
      <img src={quill} alt="Quill" />
      <p>
        SaaS Platform to upload PDF file & ask questions from the document. Offers monthly
        subscription, file size limit for free user, responsive design & a beautiful landing page.
      </p>
      <div className="centered">
        <a
          href="https://quill-six-pi.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="button"
        >
          Demo
        </a>
        <a
          href="https://github.com/nayak-nirmalya/quill"
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

export default Quill;
