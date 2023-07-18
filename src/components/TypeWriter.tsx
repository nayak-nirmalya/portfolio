import { ThemeContext } from "@/App";
import React, { useContext, useEffect, useState } from "react";

const hats = [
  {
    prep: "a",
    suffix: "Full Stack Developer"
  },
  {
    prep: "a",
    suffix: "Mobile Developer"
  },
  {
    prep: "a",
    suffix: "Blockchain Developer"
  }
];

function TypeWriter({ prefix }: { prefix: string }) {
  const theme = useContext(ThemeContext);

  // State of current hat index
  const [currentHat, setCurrentHat] = useState(0);
  // State to toggle word collapse effect
  const [collapseClass, setCollapseClass] = useState(" w-0");

  useEffect(() => {
    setTimeout(() => setCollapseClass(" w-full"), 100);

    const incrementHat = async () => {
      // Set the width to 0 - transition duration is 1000ms
      setCollapseClass(" w-0");
      setTimeout(() => {
        /**
         * After 1100ms, change the displayed text while the div
         * is collapsed by incrementing the index
         */
        setCurrentHat((oldVal) => {
          let hatIndex;
          if (oldVal >= hats.length - 1) {
            hatIndex = 0;
          } else {
            hatIndex = oldVal + 1;
          }

          return hatIndex;
        });
      }, 1100);
      // After 1000ms, set width to 100% - transition duration is 1000ms
      setTimeout(() => {
        setCollapseClass(" w-full");
      }, 1000);
    };
    // Interval timer to change text every 4000ms
    const id = setInterval(incrementHat, 4000);

    // Cleanup interval timer
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex flex-col gap-1 pb-1 lg:gap-3 lg:pb-2">
      <div className="mx-auto mt-4 text-center text-4xl font-bold md:text-5xl lg:text-7xl lg:font-normal">
        Nirmalya <span className="text-blue-400 lg:font-semibold">Nayak</span>
      </div>
      <div className="mx-auto flex gap-2 text-2xl md:text-4xl">
        <div className="ml-auto shrink-0 whitespace-nowrap">
          {prefix}
          {hats[currentHat].prep ? ` ${hats[currentHat].prep} ` : ""}
        </div>
        <div
          className={`animate-cursor mr-auto animate-typing overflow-hidden whitespace-nowrap border-r-2 pr-1 font-bold transition-[width] duration-1000 ease-in-out ${
            theme === "light" ? "border-r-black" : "border-r-white"
          }${collapseClass}`}
        >
          {hats[currentHat].suffix}
        </div>
      </div>
    </div>
  );
}

export default TypeWriter;
