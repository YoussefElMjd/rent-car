import React from "react";
export const Add = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width={props.width ?? "21"}
    height={props.height ?? "20"}
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.25 10H15.25"
      stroke={props.stroke ?? "#1F1750"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.25 15V5"
      stroke={props.stroke ?? "#1F1750"}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
