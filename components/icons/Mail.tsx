import React from "react";

import { cn } from "@/lib/utils";
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const Mail = React.forwardRef<SVGSVGElement, IconProps>(
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
        d="M16.3125 0.5H1.6875C0.738281 0.5 0 1.27344 0 2.1875V12.3125C0 13.2617 0.738281 14 1.6875 14H16.3125C17.2266 14 18 13.2617 18 12.3125V2.1875C18 1.27344 17.2266 0.5 16.3125 0.5ZM16.3125 2.1875V3.62891C15.5039 4.29688 14.2383 5.28125 11.5664 7.39062C10.9688 7.84766 9.80859 8.97266 9 8.9375C8.15625 8.97266 6.99609 7.84766 6.39844 7.39062C3.72656 5.28125 2.46094 4.29688 1.6875 3.62891V2.1875H16.3125ZM1.6875 12.3125V5.80859C2.46094 6.44141 3.62109 7.35547 5.34375 8.72656C6.11719 9.32422 7.48828 10.6602 9 10.625C10.4766 10.6602 11.8125 9.32422 12.6211 8.72656C14.3438 7.35547 15.5039 6.44141 16.3125 5.80859V12.3125H1.6875Z"
      ></path>
    </svg>
  )
);

Mail.displayName = "Mail";
