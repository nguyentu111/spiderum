import React from "react";

import { cn } from "@/lib/utils";
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const Triangle = React.forwardRef<SVGSVGElement, IconProps>(
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
        fill="#909399"
        clipRule="evenodd"
        fillRule="evenodd"
        d="M8.32031 3.98438L3.00781 12.5H13.6719L8.32031 3.98438ZM8.32031 0.820312L16.6797 14.1797H0L8.32031 0.820312Z"
      ></path>
    </svg>
  )
);

Triangle.displayName = "Triangle";
