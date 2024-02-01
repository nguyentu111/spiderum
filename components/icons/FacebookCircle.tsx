import React from "react";

import { cn } from "@/lib/utils";
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const FacebookCircle = React.forwardRef<SVGSVGElement, IconProps>(
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
        d="M475,251.36c0-124.29-100.71-225-225-225S25,127.07,25,251.36c0,112.3,82.28,205.39,189.84,222.28V316.4H157.69v-65h57.15V201.79c0-56.39,33.57-87.53,85-87.53,24.62,0,50.37,4.39,50.37,4.39V174H321.82c-27.95,0-36.66,17.35-36.66,35.14v42.23h62.4l-10,65H285.16V473.64C392.72,456.75,475,363.66,475,251.36Z"
      ></path>
    </svg>
  )
);

FacebookCircle.displayName = "FacebookCircle";
