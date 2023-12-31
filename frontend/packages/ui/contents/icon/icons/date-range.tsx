import React from "react";
export const DateRange = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width={props.width ?? "32"}
    height={props.height ?? "32"}
    viewBox={props.viewBox ?? "0 0 32 32"}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="4"
      y="8"
      width="24"
      height="20"
      rx="2"
      stroke="#33363F"
      strokeWidth="2"
    />
    <rect
      x="4"
      y="8"
      width="24"
      height="20"
      rx="2"
      stroke="#33363F"
      strokeWidth="2"
    />
    <path
      d="M4 12C4 10.1144 4 9.17157 4.58579 8.58579C5.17157 8 6.11438 8 8 8H24C25.8856 8 26.8284 8 27.4142 8.58579C28 9.17157 28 10.1144 28 12V13.3333H4V12Z"
      fill="#33363F"
    />
    <path
      d="M9.33325 4L9.33325 8"
      stroke="#33363F"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M22.6667 4L22.6667 8"
      stroke="#33363F"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <rect
      x="9.33325"
      y="16"
      width="5.33333"
      height="2.66667"
      rx="0.5"
      fill="#33363F"
    />
    <rect
      x="9.33325"
      y="21.3333"
      width="5.33333"
      height="2.66667"
      rx="0.5"
      fill="#33363F"
    />
    <rect
      x="17.3333"
      y="16"
      width="5.33333"
      height="2.66667"
      rx="0.5"
      fill="#33363F"
    />
    <rect
      x="17.3333"
      y="21.3333"
      width="5.33333"
      height="2.66667"
      rx="0.5"
      fill="#33363F"
    />
  </svg>
);
