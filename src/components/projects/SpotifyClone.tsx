import React from "react";

import spotify_clone from "../../assets/spotify_clone.png";

const SpotifyClone = () => {
  return (
    <div className="projects__card">
      <h3>Full-Stack Spotify Clone</h3>
      <img src={spotify_clone} alt="Full-Stack Spotify Clone" />
      <p>
        Full-Stack Spotify Clone where user can LogIn/SignUp with E-Mail or GitHub to Play or Search
        available Songs. Also user can subscribe to premium plan in order to Upload Songs to
        Playlist wit Stripe.
      </p>
      <div className="centered">
        <a
          href="https://spotify-clone-kappa-eight.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="button"
        >
          Demo
        </a>
        <a
          href="https://github.com/nayak-nirmalya/spotify-clone"
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

export default SpotifyClone;
