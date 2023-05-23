import { ThemeContext } from "@/App";
import React, { useContext } from "react";

interface CustomDotProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: any;
  active?: boolean;
}

const CustomDot: React.FC<CustomDotProps> = ({ onClick, active }) => {
  const theme = useContext(ThemeContext);

  return (
    <li className="hidden cursor-pointer lg:inline-block" onClick={() => onClick()}>
      {active ? (
        <span className="m-1 inline-block h-2 w-2 rounded-full bg-[#2ea043] p-1"></span>
      ) : (
        <span
          className={`m-1 inline-block h-2 w-2 rounded-full ${
            theme === "light" ? "bg-slate-900" : "bg-slate-50"
          } p-1`}
        ></span>
      )}
    </li>
  );
};

export default CustomDot;
