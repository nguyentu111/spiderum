import React from "react";

import { cn } from "@/lib/utils";
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const Logout = React.forwardRef<SVGSVGElement, IconProps>(
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
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#909399"
        d="M14.4399 8.8501H5.88989C5.33989 8.8501 4.88989 8.4001 4.88989 7.8501C4.88989 7.3001 5.33989 6.8501 5.88989 6.8501H14.4399C14.9899 6.8501 15.4399 7.3001 15.4399 7.8501C15.4399 8.4001 14.9999 8.8501 14.4399 8.8501Z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#909399"
        d="M10.5299 13.1C10.2799 13.1 10.0299 13.01 9.83992 12.82C9.43992 12.44 9.42992 11.8 9.80992 11.4L13.1399 7.91996L9.82992 4.60996C9.43992 4.21996 9.43992 3.57996 9.82992 3.18996C10.2199 2.79996 10.8599 2.79996 11.2499 3.18996L15.0699 7.00996C15.5599 7.48996 15.5699 8.29996 15.0899 8.79996L11.2699 12.79C11.0599 12.99 10.7999 13.1 10.5299 13.1ZM13.6399 8.41996C13.6399 8.41996 13.6399 8.42996 13.6399 8.41996V8.41996Z"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#909399"
        d="M5.79 16H1C0.45 16 0 15.55 0 15V1C0 0.45 0.45 0 1 0H5.79C6.34 0 6.79 0.45 6.79 1C6.79 1.55 6.34 2 5.79 2H2V13.99H5.78C6.33 13.99 6.78 14.44 6.78 14.99C6.79 15.55 6.34 16 5.79 16Z"
      ></path>
    </svg>
  )
);

Logout.displayName = "Logout";
