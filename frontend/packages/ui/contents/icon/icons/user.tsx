import React from "react";
export const User = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width={props.width ?? "32"}
    height={props.height ?? "32"}
    viewBox={props.viewBox ?? "0 0 32 32"}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M26.3031 27.2628C25.6954 25.5617 24.3562 24.0586 22.4934 22.9865C20.6305 21.9144 18.348 21.3333 15.9999 21.3333C13.6518 21.3333 11.3693 21.9144 9.50647 22.9865C7.64359 24.0586 6.30444 25.5617 5.69671 27.2628"
      stroke="#33363F"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle
      cx="16.0001"
      cy="10.6666"
      r="5.33333"
      stroke="#33363F"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
