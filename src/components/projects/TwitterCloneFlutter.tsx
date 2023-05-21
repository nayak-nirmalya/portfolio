import React from "react";

import twitter_flutter_flutter from "../../assets/twitter_flutter_flutter.png";

const TwitterCloneFlutter = () => {
  return (
    <div className="projects__card">
      <h3>Twitter Clone - Flutter</h3>
      <img src={twitter_flutter_flutter} alt="TwitterCloneFlutter" />
      <p>
        Full Stack Twitter Clone Made using Dart, Flutter, AppWrite, Riverpod. Funcionalities
        includes Notification, Following / Liking / Commenting / Image Upload.
      </p>
      <div className="centered">
        <a
          href="https://github.com/nayak-nirmalya/twitter_clone_flutter"
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

export default TwitterCloneFlutter;
