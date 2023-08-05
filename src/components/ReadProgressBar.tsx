import React from "react";

import useReadingProgress from "@hooks/useReadingProgress";

const ReadProgressBar = () => {
  const completion = useReadingProgress();

  return (
    <nav className="sticky top-0 z-50 py-0.5">
      <span
        style={{ transform: `translateX(${completion - 100}%)` }}
        className="absolute bottom-0 h-1 w-full bg-[#008800] transition"
      />
    </nav>
  );
};

export default ReadProgressBar;
