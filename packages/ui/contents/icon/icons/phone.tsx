import React from "react";
export const Phone = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    width={props.width ?? "28"}
    height={props.height ?? "28"}
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.06733 2.8455L10.3227 2.44417C11.4998 2.0685 12.7575 2.67634 13.2615 3.864L14.2648 6.23C14.7012 7.26017 14.4585 8.47233 13.6652 9.226L11.4543 11.3237C11.5908 12.579 12.0132 13.8145 12.7202 15.0302C13.3915 16.2063 14.2921 17.2358 15.3685 18.0577L18.0238 17.171C19.0295 16.8362 20.1262 17.2223 20.7422 18.1288L22.1807 20.2405C22.8982 21.2952 22.7687 22.7488 21.8785 23.6425L20.9253 24.6003C19.9757 25.5535 18.6188 25.9 17.3647 25.508C14.4013 24.584 11.6795 21.8412 9.1945 17.2795C6.706 12.7108 5.8275 8.83283 6.56017 5.65017C6.86817 4.31084 7.82133 3.24334 9.06733 2.8455V2.8455Z"
      fill="white"
    />
  </svg>
);