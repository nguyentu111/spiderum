import React from "react";

import { cn } from "@/lib/utils";
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const Star = React.forwardRef<SVGSVGElement, IconProps>(
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
        d="M2.42188 2.64062C4.0625 1 6.02865 0.179688 8.32031 0.179688C10.638 0.179688 12.6042 1 14.2188 2.64062C15.8594 4.25521 16.6797 6.20833 16.6797 8.5C16.6797 10.7917 15.8594 12.7578 14.2188 14.3984C12.6042 16.013 10.638 16.8203 8.32031 16.8203C6.02865 16.8203 4.0625 16.013 2.42188 14.3984C0.807292 12.7578 0 10.7917 0 8.5C0 6.20833 0.807292 4.25521 2.42188 2.64062ZM11.875 13.5L10.9375 9.47656L14.0234 6.78125L9.92188 6.42969L8.32031 2.67969L6.71875 6.46875L2.61719 6.78125L5.74219 9.47656L4.80469 13.5L8.32031 11.3906L11.875 13.5Z"
      ></path>
    </svg>
  )
);

Star.displayName = "Star";
