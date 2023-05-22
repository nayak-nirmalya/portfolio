import React from "react";

interface CustomDotProps {
  onClick?: any;
  active?: boolean;
}

const CustomDot: React.FC<CustomDotProps> = ({ onClick, active }) => {
  return (
    <li className="hidden cursor-pointer lg:inline-block" onClick={() => onClick()}>
      {active ? <span className="slickdot active"></span> : <span className="slickdot"></span>}
    </li>
  );
};

export default CustomDot;
