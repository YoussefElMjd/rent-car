import React from "react";
import COLORS from "../../../constant/colors";
export const Pause = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width={props.width ?? "48"}
    height={props.height ?? "48"}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="12"
      y="10"
      width="8"
      height="28"
      rx="1"
      stroke={COLORS.Secondary.value}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <rect
      x="28"
      y="10"
      width="8"
      height="28"
      rx="1"
      stroke={COLORS.Secondary.value}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
