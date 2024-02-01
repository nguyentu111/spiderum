import React from "react";

import { cn } from "@/lib/utils";
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const ChevronUp = React.forwardRef<SVGSVGElement, IconProps>(
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
        d="M0.885739 10.863C0.681279 10.863 0.48571 10.7919 0.316808 10.6586C-0.0565534 10.3474 -0.10989 9.77851 0.210134 9.40515L8.07739 0L15.7935 9.20958C16.1047 9.58294 16.0602 10.143 15.6869 10.463C15.3135 10.7741 14.7535 10.7297 14.4334 10.3563L8.07739 2.77354L1.57024 10.543C1.39244 10.7564 1.13465 10.863 0.885739 10.863Z"
      ></path>
    </svg>
  )
);

ChevronUp.displayName = "ChevronUp";
