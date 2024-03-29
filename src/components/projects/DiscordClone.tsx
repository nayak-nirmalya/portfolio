import React from "react";

import discord_clone from "@assets/discord_clone.png";

const DiscordClone = () => {
  return (
    <div className="projects__card">
      <h3>Discord Clone</h3>
      <img src={discord_clone} alt="Discord Clone" />
      <p>
        Create/Join/Leave/Delete Severs/Channels, send messages (Text/Pictures/PDFs) in real-time,
        Audio/Video call with server members. Responsive Layout with Dark/Light theme.
      </p>
      <div className="centered">
        <a
          href="https://discord-clone-nirmalya.up.railway.app/"
          target="_blank"
          rel="noreferrer"
          className="button"
        >
          Demo
        </a>
        <a
          href="https://github.com/nayak-nirmalya/discord-clone"
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

export default DiscordClone;
