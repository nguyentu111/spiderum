import React from "react";

import { cn } from "@/lib/utils";
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const TriangleUpFill = React.forwardRef<SVGSVGElement, IconProps>(
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
        d="M8.64062 0.820313L17 14.1797L0.320312 14.1797L8.64062 0.820313Z"
        fill="currentColor"
      ></path>
    </svg>
  )
);

TriangleUpFill.displayName = "TriangleUpFill";
