import React from "react";

const Footer = () => {
  return (
    <footer className="mx-auto justify-center pb-2 text-center lg:pb-4">
      <p>
        <small className="text-xs">Nirmalya Nayak &copy; {new Date().getFullYear()}</small>
      </p>
    </footer>
  );
};

export default Footer;
