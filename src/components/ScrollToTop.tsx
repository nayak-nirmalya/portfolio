import React, { useEffect } from "react";
import { BiArrowToTop } from "react-icons/bi";

const ScrollToTop = () => {
  const scrolltoTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    const topBtn = document.getElementById("topButton");
    window.onscroll = () =>
      document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
        ? topBtn?.classList.remove("hidden")
        : topBtn?.classList.add("hidden");
  }, [document.body.scrollTop, document.documentElement.scrollTop]);

  return (
    <button
      onClick={scrolltoTop}
      id="topButton"
      className="fixed bottom-5 right-5 z-10 hidden animate-bounce rounded-full bg-[#008800] p-2 shadow-md transition hover:bg-[#2b611a] lg:bottom-10 lg:right-10"
    >
      <BiArrowToTop title="Scroll to Top." color="white" size={25} />
    </button>
  );
};

export default ScrollToTop;
