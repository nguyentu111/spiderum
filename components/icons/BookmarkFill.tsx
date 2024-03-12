import React from "react";

import { cn } from "@/lib/utils";
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const BookmarkFill = React.forwardRef<SVGSVGElement, IconProps>(
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#909399"
        d="M171.88,52.08a68,68,0,0,0-67.71,67.71v312.5A15.63,15.63,0,0,0,128.93,445L250,357.79,371.07,445a15.62,15.62,0,0,0,24.76-12.68V119.79a68,68,0,0,0-67.7-67.71Z"
      ></path>
    </svg>
  )
);

BookmarkFill.displayName = "BookmarkFill";
