import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps {
  children?: React.ReactNode;
  className?: string;
}
export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={cn(
        "md:max-w-[720px] lg:max-w-[1192px] px-4 m-auto w-full",
        className
      )}
    >
      {children}
    </div>
  );
};
