import React from "react";

const Social = () => {
  return (
    <div className="flex flex-col px-6 lg:px-36">
      <h2 className="mx-auto items-center p-3 text-4xl font-extrabold lg:mx-0 lg:p-6">Socials</h2>

      <div className="grid grid-flow-col grid-cols-12 grid-rows-4 items-center justify-center gap-4 p-1 lg:flex lg:flex-row lg:p-4">
        <a
          className="col-span-4"
          href="https://github.com/nayak-nirmalya"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="mx-auto h-8 items-center transition-all duration-200 hover:scale-110"
            src="https://img.shields.io/badge/github-%231A1918.svg?style=for-the-badge&logo=github&logoColor=white"
            alt="nayak-nirmalya"
          />
        </a>

        <a
          className="col-span-4"
          href="mailto:n.nayak263@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="mx-auto h-8 items-center transition-all duration-200 hover:scale-110"
            src="https://img.shields.io/badge/-GMail-c14438?style=for-the-badge&logo=Gmail&logoColor=white"
            alt="n.nayak263@gmail.com"
          />
        </a>

        <a
          className="col-span-4"
          href="https://join.skype.com/invite/vUZSpHukF8ur"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="mx-auto h-8 items-center transition-all duration-200 hover:scale-110"
            src="https://img.shields.io/badge/Skype-%2300AFF0.svg?style=for-the-badge&logo=Skype&logoColor=white"
            alt="nayak.nirmalya"
          />
        </a>

        <a
          className="col-start-2 col-end-7"
          href="https://twitter.com/nirmalya_nayak"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="mx-auto h-8 items-center transition-all duration-200 hover:scale-110"
            src="https://img.shields.io/badge/Twitter-%231DA1F2.svg?style=for-the-badge&logo=Twitter&logoColor=white"
            alt="@nirmalya_nayak"
          />
        </a>

        <a
          className="col-start-7 col-end-12"
          href="https://www.hackerrank.com/n_nayak"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="mx-auto h-8 items-center transition-all duration-200 hover:scale-110"
            src="https://img.shields.io/badge/-HackerRank-2EC866?style=for-the-badge&logo=HackerRank&logoColor=white"
            alt="n_nayak"
          />
        </a>

        <a
          className="col-start-3 col-end-7"
          href="http://discordapp.com/users/536800905727705118"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="mx-auto h-8 items-center transition-all duration-200 hover:scale-110"
            src="https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white"
            alt="nirmalya#1607"
          />
        </a>

        <a
          className="col-start-7 col-end-11"
          href="https://www.linkedin.com/in/nirmalya-nayak/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="mx-auto h-8 items-center transition-all duration-200 hover:scale-110"
            src="https://img.shields.io/badge/-LinkedIn-blue?style=for-the-badge&logo=Linkedin&logoColor=white"
            alt="nirmalya-nayak"
          />
        </a>

        <a
          className="col-start-2 col-end-7"
          href="https://wa.me/917008944644"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="mx-auto h-8 items-center transition-all duration-200 hover:scale-110"
            src="https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white"
            alt="+91-7008944644"
          />
        </a>

        <a
          className="col-start-7 col-end-12"
          href="https://t.me/+917008944644"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="mx-auto h-8 items-center transition-all duration-200 hover:scale-110"
            src="https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white"
            alt="+91-7008944644"
          />
        </a>
      </div>
    </div>
  );
};

export default Social;
