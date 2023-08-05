import React, { useContext } from "react";

import { ThemeContext } from "@/App";

interface CustomDotProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: any;
  active?: boolean;
}

const CustomDot: React.FC<CustomDotProps> = ({ onClick, active }) => {
  const theme = useContext(ThemeContext);

  return (
    <li className="cursor-pointer lg:inline-block" onClick={() => onClick()}>
      {active ? (
        <span className="m-0.5 inline-block h-0.5 w-4 rounded-full bg-[#2ea043] p-0.5 lg:m-1 lg:h-2 lg:w-6 lg:p-1"></span>
      ) : (
        <span
          className={`m-0.5 inline-block h-0.5 w-0.5 rounded-full lg:m-1 lg:h-2 lg:w-2 ${
            theme === "light" ? "bg-slate-900" : "bg-slate-50"
          } p-0.5 lg:p-1`}
        ></span>
      )}
    </li>
  );
};

export default CustomDot;
