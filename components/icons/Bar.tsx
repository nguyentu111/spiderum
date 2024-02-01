import React from "react";

import { cn } from "@/lib/utils";
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const Bar = React.forwardRef<SVGSVGElement, IconProps>(
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
        d="M75.89,139.2H424.11c7.39,0,13.39-7.63,13.39-17V79.55c0-9.42-6-17-13.39-17H75.89c-7.39,0-13.39,7.63-13.39,17v42.61C62.5,131.57,68.5,139.2,75.89,139.2Zm0,149.15H424.11c7.39,0,13.39-7.63,13.39-17V228.69c0-9.41-6-17-13.39-17H75.89c-7.39,0-13.39,7.63-13.39,17v42.62C62.5,280.72,68.5,288.35,75.89,288.35Zm0,149.15H424.11c7.39,0,13.39-7.63,13.39-17.05V377.84c0-9.41-6-17-13.39-17H75.89c-7.39,0-13.39,7.63-13.39,17v42.61C62.5,429.87,68.5,437.5,75.89,437.5Z"
      ></path>
    </svg>
  )
);

Bar.displayName = "Bar";
