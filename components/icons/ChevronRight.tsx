import React from "react";

import { cn } from "@/lib/utils";
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const ChevronRight = React.forwardRef<SVGSVGElement, IconProps>(
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
        d="M2.8125 0L14.8125 12L2.8125 24L0 21.1875L9.1875 12L0 2.8125L2.8125 0Z"
        fill="currentColor"
      ></path>
    </svg>
  )
);

ChevronRight.displayName = "ChevronRight";
