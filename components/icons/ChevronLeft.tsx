import React from "react";

import { cn } from "@/lib/utils";
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const ChevronLeft = React.forwardRef<SVGSVGElement, IconProps>(
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
        d="M14.8125 2.8125L5.625 12L14.8125 21.1875L12 24L0 12L12 0L14.8125 2.8125Z"
        fill="currentColor"
      ></path>
    </svg>
  )
);

ChevronLeft.displayName = "ChevronLeft";
