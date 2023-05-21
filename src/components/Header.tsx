// Import Assets
import profile from "../assets/profile.jpg";
import resume from "../assets/resume/NIRMALYA_NAYAK.pdf";

import React, { useContext } from "react";
import { ThemeContext } from "../App";

const Header = () => {
  const theme = useContext(ThemeContext);

  return (
    <section className="header">
      <img className="border-2 border-[#008800]" src={profile} alt="Nirmalya Nayak" />

      <div className="header__content">
        <h1 className="font-bold">Hi, I&apos;m Nirmalya Nayak</h1>
        {theme === "light" ? (
          <img
            width="600"
            height="55"
            className="header__image"
            src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=900&size=24&pause=1000&color=000000&background=14132100&center=true&vCenter=true&width=600&lines=Full+Stack+%2F+Mobile+%2F+Blockchain+Developer"
            alt="Typing SVG"
          />
        ) : (
          <img
            width="600"
            height="55"
            className="header__image"
            src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=900&size=24&pause=1000&color=ffffff&background=14132100&center=true&vCenter=true&width=600&lines=Full+Stack+%2F+Mobile+%2F+Blockchain+Developer"
            alt="Typing SVG"
          />
        )}
        {/* <p>Full Stack / Blockchain Developer</p> */}
        <h4 className="font-semibold">
          E-Mail: <a href="mailto:nayak.nirmalya@hotmail.com">nayak.nirmalya@hotmail.com</a>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          ></link>{" "}
          <div className="tooltip">
            <i
              className="fa fa-copy"
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigator.clipboard.writeText("nayak.nirmalya@hotmail.com");
              }}
            ></i>
            <span className="tooltiptext">Copy to Clipboard.</span>
          </div>
        </h4>
        <h4 className="font-semibold">
          Contact No.: <a href="tel:+917008944644">+91-7008944644</a>
        </h4>
        <h4 className="font-semibold">Odisha, India</h4>
        <a
          href={resume}
          download="NirmalyaNayakResume.pdf"
          target="_blank"
          rel="noreferrer"
          className="button"
          style={{ padding: "12px", margin: "14px" }}
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Header;
