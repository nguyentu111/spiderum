import React from "react";

import { cn } from "@/lib/utils";
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const Youtube = React.forwardRef<SVGSVGElement, IconProps>(
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.989 4.89a64.248 64.248 0 0 1 10.022 0l2.24.176a2.725 2.725 0 0 1 2.476 2.268c.517 3.09.517 6.243 0 9.332a2.725 2.725 0 0 1-2.475 2.268l-2.24.175a64.24 64.24 0 0 1-10.023 0l-2.24-.175a2.725 2.725 0 0 1-2.476-2.268a28.315 28.315 0 0 1 0-9.332a2.725 2.725 0 0 1 2.475-2.268zM10 14.47V9.53a.3.3 0 0 1 .454-.257l4.117 2.47a.3.3 0 0 1 0 .514l-4.117 2.47A.3.3 0 0 1 10 14.47"
      />
    </svg>
  )
);

Youtube.displayName = "Youtube";
