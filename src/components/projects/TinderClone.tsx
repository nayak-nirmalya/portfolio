import React from "react";

import tinder_clone from "../../assets/tinder_clone.png";

const TinderClone = () => {
  return (
    <div className="projects__card">
      <h3>Tinder Clone (Expo)</h3>
      <img src={tinder_clone} alt="Tinder Clone" />
      <p>
        This Project is a Tinder Clone Mobile App made with React Native, Expo, TypeScript,
        TailWindCSS, React Navigation, Firebase & OAuth. Swipe to Match with Users & Message.
      </p>
      <div className="centered">
        <a
          href="https://github.com/nayak-nirmalya/tinder-clone"
          target="_blank"
          rel="noreferrer"
          className="button"
        >
          Code
        </a>
        <a
          href="https://expo.dev/accounts/nirmalya_nayak/projects/tinder/builds/865c6309-244e-423a-83fe-7741aa96df14"
          target="_blank"
          rel="noreferrer"
          className="button"
        >
          APK Build
        </a>
      </div>
    </div>
  );
};

export default TinderClone;
