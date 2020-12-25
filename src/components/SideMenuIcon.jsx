import React from "react";

const SideMenuIcon = (props) => {
  return (
    <svg
      width="44"
      height="35"
      viewBox="0 0 44 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <line
        x1="3"
        y1="3"
        x2="41"
        y2="3"
        stroke={props.color}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="3"
        y1="18"
        x2="26"
        y2="18"
        stroke={props.color}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="3"
        y1="32"
        x2="26"
        y2="32"
        stroke={props.color}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SideMenuIcon;
