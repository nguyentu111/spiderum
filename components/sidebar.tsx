import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface SidebarProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}
export const Sidebar = ({ children, className, ...rest }: SidebarProps) => {
  return (
    <div
      className={cn(
        "px-4 mb-6 border-[1px] border-[var(--common-border-color)] rounded",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
