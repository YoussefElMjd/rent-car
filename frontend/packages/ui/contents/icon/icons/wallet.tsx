import React from "react";
export const Wallet = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width={props.width ?? "30"}
    height={props.height ?? "30"}
    viewBox={props.viewBox ?? "0 0 30 30"}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.75001 8.125V8.125C3.75001 8.00894 3.75001 7.95091 3.75162 7.90184C3.80333 6.322 5.07201 5.05332 6.65185 5.00161C6.70092 5 6.75895 5 6.87501 5L24.1071 5C24.4753 5 24.6594 5 24.7893 5.09222C24.8352 5.12476 24.8752 5.1648 24.9078 5.21066C25 5.34064 25 5.52471 25 5.89286V5.89286C25 8.10174 25 9.20619 24.4467 9.98601C24.2514 10.2612 24.0112 10.5014 23.736 10.6967C22.9562 11.25 21.8517 11.25 19.6429 11.25H18.75M3.75001 8.125V8.125C3.75001 8.24106 3.75001 8.29909 3.75162 8.34816C3.80333 9.928 5.07201 11.1967 6.65185 11.2484C6.70092 11.25 6.75895 11.25 6.87501 11.25L24.25 11.25C25.1928 11.25 25.6642 11.25 25.9571 11.5429C26.25 11.8358 26.25 12.3072 26.25 13.25L26.25 16.25M3.75001 8.125L3.75001 22.25C3.75001 24.1356 3.75001 25.0784 4.3358 25.6642C4.92158 26.25 5.86439 26.25 7.75001 26.25L24.25 26.25C25.1928 26.25 25.6642 26.25 25.9571 25.9571C26.25 25.6642 26.25 25.1928 26.25 24.25L26.25 21.25M26.25 21.25H20.75C19.8072 21.25 19.3358 21.25 19.0429 20.9571C18.75 20.6642 18.75 20.1928 18.75 19.25V18.25C18.75 17.3072 18.75 16.8358 19.0429 16.5429C19.3358 16.25 19.8072 16.25 20.75 16.25H26.25M26.25 21.25L26.25 16.25"
      stroke="#33363F"
      strokeWidth="2"
    />
  </svg>
);