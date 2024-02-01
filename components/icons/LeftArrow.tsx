import React from "react";

import { cn } from "@/lib/utils";
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const LeftArrow = React.forwardRef<SVGSVGElement, IconProps>(
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
        d="M2.05028 5.28027H15.0103C15.8503 5.28027 16.5303 5.78027 16.5303 6.39027C16.5303 7.00027 15.8503 7.50027 15.0103 7.50027H2.05028C1.21028 7.50027 0.530273 7.00027 0.530273 6.39027C0.530273 5.78027 1.21028 5.28027 2.05028 5.28027Z"
        fill="#414042"
      />
      <path
        d="M6.06962 0.560059C6.34962 0.560059 6.62962 0.660059 6.84962 0.870059C7.29962 1.30006 7.31961 2.00006 6.87961 2.44006L3.12961 6.31006L6.8696 9.99006C7.3096 10.4301 7.3096 11.1301 6.8696 11.5701C6.4296 12.0101 5.70961 12.0101 5.26961 11.5701L0.969611 7.33006C0.419611 6.79006 0.409607 5.90006 0.949607 5.34006L5.2596 0.900059C5.4696 0.670059 5.76962 0.560059 6.06962 0.560059Z"
        fill="#414042"
      />
    </svg>
  )
);

LeftArrow.displayName = "LeftArrow";
