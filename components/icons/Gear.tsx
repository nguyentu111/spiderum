import React from "react";

import { cn } from "@/lib/utils";
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const Gear = React.forwardRef<SVGSVGElement, IconProps>(
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
        d="M15.7218 5.84C15.1018 5.83 14.4918 5.56 14.0718 5.03C13.4918 4.28 13.4718 3.26 13.9418 2.49C12.8418 1.22 11.4318 0.38 9.91181 0C9.78181 0.29 9.5918 0.56 9.3318 0.77C8.4218 1.53 7.08181 1.38 6.34181 0.439999C6.23181 0.299999 6.1518 0.15 6.0818 0C4.9818 0.28 3.92181 0.79 2.98181 1.57C2.67181 1.83 2.3918 2.11 2.1318 2.4C2.7718 3.34 2.61181 4.64 1.73181 5.36C1.31181 5.71 0.791801 5.86 0.281801 5.83C-0.108199 7.32 -0.0981935 8.9 0.341807 10.39C0.981807 10.37 1.62181 10.64 2.05181 11.19C2.63181 11.93 2.6618 12.93 2.2118 13.7C3.2818 14.86 4.62181 15.63 6.05181 16C6.18181 15.67 6.3818 15.38 6.6718 15.14C7.5818 14.38 8.92181 14.53 9.66181 15.48C9.78181 15.64 9.88181 15.82 9.95181 16C11.0418 15.72 12.0918 15.21 13.0218 14.44C13.3318 14.18 13.6018 13.9 13.8618 13.61C13.3818 12.7 13.5818 11.53 14.4018 10.86C14.7718 10.55 15.2218 10.4 15.6618 10.39C16.0918 8.91 16.1218 7.33 15.7218 5.84ZM8.0018 11.53C6.0518 11.53 4.4718 9.95 4.4718 8C4.4718 6.05 6.0518 4.47 8.0018 4.47C9.9518 4.47 11.5318 6.05 11.5318 8C11.5318 9.95 9.9518 11.53 8.0018 11.53Z"
      ></path>
    </svg>
  )
);

Gear.displayName = "Gear";
