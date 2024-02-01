import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        primary:
          "bg-[rgb(51,152,212)] text-white hover:!bg-[#2e89bf] rounded-lg px-6 py-2",
        secondary:
          "border-[1px] border-[#e3e3e3] hover:bg-gray-100 flex items-center justify-center rounded-[21px] px-6 py-2",
        carousel:
          "flex items-center justify-center bg-[rgba(22,22,22,.1)] hover:bg-[rgba(22,22,22,.75)]",
      },
      size: {
        default: "h-9",
        sm: "h-9 text-xs",
        lg: "h-10 text-md",
        icon: "h-9 w-9",
        carousel: "w-10 h-20",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
