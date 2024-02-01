import React from "react";

import { cn } from "@/lib/utils";
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const Flag = React.forwardRef<SVGSVGElement, IconProps>(
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
        d="M7.85156 2.5H12.5V10.8203H6.67969L6.32812 9.17969H1.67969V15H0V0.820312H7.5L7.85156 2.5Z"
        fill="currentColor"
      ></path>
    </svg>
  )
);

Flag.displayName = "Flag";
