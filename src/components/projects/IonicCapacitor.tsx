import React from "react";

import ionic_capacitor from "@assets/ionic_capacitor.png";

const IonicCapacitor = () => {
  return (
    <div className="projects__card">
      <h3>Ionic & Capacitor</h3>
      <img src={ionic_capacitor} alt="IonicCapacitor" />
      <p>
        App that showcases various features & functionalities of Ionic framework with capacitor for
        Website, PWA, Android, iOS & Desktop (Electron) made using TypeScript.
      </p>
      <div className="centered">
        <a href="https://ionic-pg.netlify.app/" target="_blank" rel="noreferrer" className="button">
          Demo
        </a>
        <a
          href="https://github.com/nayak-nirmalya/ionic-playground"
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

export default IonicCapacitor;
