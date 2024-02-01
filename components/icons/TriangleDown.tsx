import React from "react";

import { cn } from "@/lib/utils";
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const TriangleDown = React.forwardRef<SVGSVGElement, IconProps>(
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
        d="M8.67969 11.0156L13.9922 2.5L3.32812 2.5L8.67969 11.0156ZM8.67969 14.1797L0.320311 0.820314L17 0.820312L8.67969 14.1797Z"
      ></path>
    </svg>
  )
);

TriangleDown.displayName = "TriangleDown";
