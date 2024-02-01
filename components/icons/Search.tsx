import React from "react";

import { cn } from "@/lib/utils";
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const Search = React.forwardRef<SVGSVGElement, IconProps>(
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
        fill="currentColor"
        d="M213.54,62.5c-83.23,0-151,67.81-151,151s67.81,151,151,151a150.22,150.22,0,0,0,95.09-33.85l102.2,102.19a15.62,15.62,0,0,0,22.54-21.64,4.78,4.78,0,0,0-.45-.45L330.73,308.63a150.22,150.22,0,0,0,33.85-95.09C364.58,130.31,296.77,62.5,213.54,62.5Zm0,31.25a119.81,119.81,0,0,1,86.37,202.82,15.56,15.56,0,0,0-3.34,3.34,119.8,119.8,0,1,1-83-206.16Z"
      ></path>
    </svg>
  )
);

Search.displayName = "Search";
