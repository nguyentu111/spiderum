import React from "react";

import { cn } from "@/lib/utils";
export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export const Stack = React.forwardRef<SVGSVGElement, IconProps>(
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
      <g clipPath="url(#clip0_3323_1262)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.70184 0.737008C7.88953 0.643165 8.11044 0.643165 8.29813 0.737008L14.9648 4.07034C15.1906 4.18327 15.3333 4.41411 15.3333 4.66663C15.3333 4.91914 15.1906 5.14998 14.9648 5.26291L8.29813 8.59624C8.11044 8.69009 7.88953 8.69009 7.70184 8.59624L1.03517 5.26291C0.809318 5.14998 0.66665 4.91914 0.66665 4.66663C0.66665 4.41411 0.809318 4.18327 1.03517 4.07034L7.70184 0.737008ZM2.82403 4.66663L7.99998 7.2546L13.1759 4.66663L7.99998 2.07865L2.82403 4.66663Z"
          fill="#909399"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.737032 11.0351C0.901691 10.7058 1.30214 10.5723 1.63146 10.737L7.99998 13.9213L14.3685 10.737C14.6978 10.5723 15.0983 10.7058 15.2629 11.0351C15.4276 11.3645 15.2941 11.7649 14.9648 11.9296L8.29813 15.2629C8.11044 15.3568 7.88953 15.3568 7.70184 15.2629L1.03517 11.9296C0.705855 11.7649 0.572372 11.3645 0.737032 11.0351Z"
          fill="#909399"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.737032 7.70182C0.901691 7.3725 1.30214 7.23901 1.63146 7.40367L7.99998 10.5879L14.3685 7.40367C14.6978 7.23901 15.0983 7.3725 15.2629 7.70182C15.4276 8.03114 15.2941 8.43158 14.9648 8.59624L8.29813 11.9296C8.11044 12.0234 7.88953 12.0234 7.70184 11.9296L1.03517 8.59624C0.705855 8.43158 0.572372 8.03114 0.737032 7.70182Z"
          fill="#909399"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_3323_1262">
          <rect width="16" height="16" fill="white"></rect>
        </clipPath>
      </defs>
    </svg>
  )
);

Stack.displayName = "Stack";
