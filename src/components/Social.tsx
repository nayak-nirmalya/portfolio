import React from "react";

const Social = () => {
  return (
    <div className="social">
      <h2 className="font-bold">Socials</h2>

      <div className="flex flex-row items-center justify-center sm:gap-2 lg:gap-8">
        <a href="mailto:n.nayak263@gmail.com" target="_blank" rel="noopener noreferrer">
          <img
            className="items-center mx-auto lg:h-10 sm:h-auto"
            src="https://img.shields.io/badge/-GMail-c14438?style=for-the-badge&logo=Gmail&logoColor=white"
            alt="n.nayak263@gmail.com"
          />
        </a>

        <a href="https://wa.me/917008944644" target="_blank" rel="noopener noreferrer">
          <img
            className="items-center mx-auto lg:h-10 sm:h-auto"
            src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"
            alt="+91-7008944644"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/nirmalya-nayak/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="items-center mx-auto lg:h-10 sm:h-auto"
            src="https://img.shields.io/badge/-LinkedIn-blue?style=for-the-badge&logo=Linkedin&logoColor=white"
            alt="nirmalya-nayak"
          />
        </a>

        <a href="https://github.com/nayak-nirmalya" target="_blank" rel="noopener noreferrer">
          <img
            className="items-center mx-auto lg:h-10 sm:h-auto"
            src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white"
            alt="nayak-nirmalya"
          />
        </a>

        <a href="https://www.hackerrank.com/n_nayak" target="_blank" rel="noopener noreferrer">
          <img
            className="items-center mx-auto lg:h-10 sm:h-auto"
            src="https://img.shields.io/badge/-HackerRank-2EC866?style=for-the-badge&logo=HackerRank&logoColor=white"
            alt="nayak-nirmalya"
          />
        </a>
      </div>
    </div>
  );
};

export default Social;
