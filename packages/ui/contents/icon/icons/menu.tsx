import React from "react";
import COLORS from "../../../constant/colors";
export const Menu = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width={props.width ?? "24"}
    height={props.height ?? "24"}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 7H19"
      stroke={COLORS.Third.value}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M5 12H19"
      stroke={COLORS.Third.value}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M5 17H19"
      stroke={COLORS.Third.value}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
