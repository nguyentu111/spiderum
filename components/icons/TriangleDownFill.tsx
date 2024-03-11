import React from "react";

import { cn } from "@/lib/utils";
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const TriangleDownFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        d="M8.35938 13.3594L-1.16791e-06 1.45818e-06L16.6797 0L8.35938 13.3594Z"
        fill="currentColor"
      ></path>
    </svg>
  )
);

TriangleDownFill.displayName = "TriangleDownFill";
