import React from "react";

import ionic_capacitor from "../../assets/ionic_capacitor.png";

const IonicCapacitor = () => {
  return (
    <div className="projects__card">
      <h3>IonicCapacitor</h3>
      <img src={ionic_capacitor} alt="IonicCapacitor" />
      <p>Dummy App that showcases various functionalities of Ioncin framework with capacitor.</p>
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
