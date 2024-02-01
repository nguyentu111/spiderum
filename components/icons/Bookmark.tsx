import React from "react";

import { cn } from "@/lib/utils";
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const Bookmark = React.forwardRef<SVGSVGElement, IconProps>(
  ({ className, size = 20, ...props }, ref) => (
    <svg
      ref={ref}
      className={cn("", className)}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#909399"
        d="M15.75 0H2.25C0.984375 0 0 1.03125 0 2.25V24L9 18.75L18 24V2.25C18 1.03125 16.9688 0 15.75 0ZM15.75 20.1094L9 16.1719L2.25 20.1094V2.53125C2.25 2.39062 2.34375 2.25 2.53125 2.25H15.4688C15.6094 2.25 15.75 2.39062 15.75 2.53125V20.1094Z"
      ></path> */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#909399"
        d="M171.88,52.08a68,68,0,0,0-67.71,67.71v312.5A15.63,15.63,0,0,0,128.93,445L250,357.79,371.07,445a15.62,15.62,0,0,0,24.76-12.68V119.79a68,68,0,0,0-67.7-67.71Zm0,31.25H328.13a36.23,36.23,0,0,1,36.45,36.46v282L259.13,325.87a15.61,15.61,0,0,0-18.26,0L135.42,401.79v-282A36.23,36.23,0,0,1,171.88,83.33Z"
      ></path>
    </svg>
  )
);

Bookmark.displayName = "Bookmark";
