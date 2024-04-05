import React, { useContext } from "react";
import { BiCopyAlt } from "react-icons/bi";
import toast, { Toaster } from "react-hot-toast";
import { BsDownload } from "react-icons/bs";

import { ThemeContext } from "@/App";
import TypeWriter from "@components/TypeWriter";

const Header = () => {
  const theme = useContext(ThemeContext);

  return (
    <section className="flex flex-wrap items-center px-6 text-center lg:px-28">
      <Toaster position="bottom-center" />
      <img
        src="/profile.jpg"
        alt="Nirmalya Nayak"
        className={`
          mx-auto 
          w-64 
          items-center 
          rounded-full 
          border-2 
          border-[#008800]
          ${theme === "light" && "shadow-xl"}
          ${theme === "light" && "shadow-slate-400"}
          lg:mx-36 lg:w-72
        `}
      />

      <div className="mx-auto lg:mx-0">
        <TypeWriter prefix="I'm " />

        <h4 className="flex items-center justify-center font-semibold">
          E-Mail:{" "}
          <a className="mx-1 hover:underline" href="mailto:nayak.nirmalya@hotmail.com">
            nayak.nirmalya@hotmail.com
          </a>
          <BiCopyAlt
            onClick={() => {
              navigator.clipboard.writeText("nayak.nirmalya@hotmail.com");
              toast.success("Copied to Clipboard.", {
                style: {
                  background: theme == "dark" ? "#191e26" : "#c5cdd9",
                  padding: "8px",
                  color: theme == "dark" ? "#ffffff" : "#000000"
                },
                iconTheme: {
                  primary: "#008800",
                  secondary: "#ffffff"
                }
              });
            }}
            title="Copy to Clipboard."
            className="mx-0.5 cursor-pointer"
          />
        </h4>
        <h4 className="font-semibold">
          Contact No.:{" "}
          <a className="mx-1 hover:underline" href="tel:+917008944644">
            +91-7008944644
          </a>
        </h4>
        <h4 className="font-semibold">Odisha, India</h4>
        <a
          href="/resume.pdf"
          download="NirmalyaNayakResume.pdf"
          target="_blank"
          rel="noreferrer"
          className="button"
          style={{
            padding: "8px 12px",
            margin: "14px"
          }}
        >
          Download Resume
          <BsDownload
            className="mx-2 inline-block"
            style={{ color: "white", strokeWidth: "1.2" }}
          />
        </a>
      </div>
    </section>
  );
};

export default Header;
