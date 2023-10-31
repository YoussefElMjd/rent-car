import React from "react";
export const Calendar = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width={props.width ?? "46"}
    height={props.height ?? "45"}
    viewBox="0 0 46 45"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_107_338)">
      <path
        d="M45.4995 42.5969C45.4995 43.5704 44.6951 44.3569 43.6995 44.3569H2.29951C1.30389 44.3569 0.499513 43.5704 0.499513 42.5969V19.4969H45.4995V42.5969ZM2.29951 4.31693H11.7495V0.796934C11.7495 0.554934 11.952 0.356934 12.1995 0.356934H15.3495C15.597 0.356934 15.7995 0.554934 15.7995 0.796934V4.31693H30.1995V0.796934C30.1995 0.554934 30.402 0.356934 30.6495 0.356934H33.7995C34.047 0.356934 34.2495 0.554934 34.2495 0.796934V4.31693H43.6995C44.6951 4.31693 45.4995 5.10343 45.4995 6.07693V15.7569H0.499513V6.07693C0.499513 5.10343 1.30389 4.31693 2.29951 4.31693Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_107_338">
        <rect
          width="45"
          height="44"
          fill="white"
          transform="matrix(-1 0 0 1 45.4995 0.356934)"
        />
      </clipPath>
    </defs>
  </svg>
);
