import React from "react";

import { cn } from "@/lib/utils";
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const PinWheel = React.forwardRef<SVGSVGElement, IconProps>(
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
        d="M9.17969 9.5C9.17969 8.25 9.6224 7.18229 10.5078 6.29688C11.4193 5.38542 12.5 4.92969 13.75 4.92969C15 4.92969 16.0677 5.38542 16.9531 6.29688C17.8646 7.18229 18.3203 8.25 18.3203 9.5H9.17969ZM9.17969 9.5C9.17969 10.75 8.72396 11.8307 7.8125 12.7422C6.90104 13.6276 5.82031 14.0703 4.57031 14.0703C3.32031 14.0703 2.23958 13.6276 1.32812 12.7422C0.442708 11.8307 0 10.75 0 9.5H9.17969ZM9.17969 9.5C7.92969 9.5 6.84896 9.05729 5.9375 8.17188C5.02604 7.26042 4.57031 6.17969 4.57031 4.92969C4.57031 3.67969 5.02604 2.59896 5.9375 1.6875C6.84896 0.776042 7.92969 0.320312 9.17969 0.320312V9.5ZM9.17969 9.5C10.4297 9.5 11.4974 9.95573 12.3828 10.8672C13.2943 11.7526 13.75 12.8203 13.75 14.0703C13.75 15.3203 13.2943 16.401 12.3828 17.3125C11.4974 18.224 10.4297 18.6797 9.17969 18.6797V9.5Z"
      ></path>
    </svg>
  )
);

PinWheel.displayName = "PinWheel";
