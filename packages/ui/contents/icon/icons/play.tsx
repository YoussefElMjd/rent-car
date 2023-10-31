import React from "react";
import COLORS from "../../../constant/colors";
export const Play = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width={props.width ?? "48"}
    height={props.height ?? "48"}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C14.0589 6 6 14.0589 6 24C6 33.9411 14.0589 42 24 42ZM19.7828 14.9904L34.4265 23.1258C35.1123 23.5068 35.1123 24.4932 34.4265 24.8742L19.7828 33.0096C18.9829 33.4539 18 32.8756 18 31.9606V16.0394C18 15.1244 18.9829 14.5461 19.7828 14.9904Z"
      fill={COLORS.Secondary.value}
    />
  </svg>
);
