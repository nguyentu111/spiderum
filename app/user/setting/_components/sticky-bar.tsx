"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { HTMLAttributes } from "react";
interface StickyBarProps extends HTMLAttributes<HTMLUListElement> {}
export const Stickybar = ({ className }: StickyBarProps) => {
  const tab = useSearchParams().get("tab");
  return (
    <ul
      className={cn(
        "flex lg:flex-col flex-wrap items-start lg:fixed transition-opacity duration-200 ease-in-out   select-none lg:w-[11rem] p-[15px] lg:p-0",
        className
      )}
      style={{ left: "calc((100% - 650px) / 2 - 14vw)", top: "20%" }}
    >
      <li
        className={cn(
          (!tab || tab === "account") &&
            "border-b-[3px] lg:border-b-0 lg:border-l-[3px] border-blue-400 font-bold text-gray-600",
          "p-1.5 cursor-pointer lg:w-full hover:text-blue-500 px-4 lg:px-1.5"
        )}
      >
        <Link href="/user/setting?tab=account" className="pl-1">
          Tài khoản
        </Link>
      </li>
      <li
        className={cn(
          tab === "series" &&
            "border-b-[3px] lg:border-b-0 lg:border-l-[3px] border-blue-400 font-bold text-gray-600",
          "p-1.5 cursor-pointer lg:w-full hover:text-blue-500 px-4 lg:px-1.5"
        )}
      >
        <Link href="/user/setting?tab=series" className="pl-1">
          Series
        </Link>
      </li>
      <li
        className={cn(
          tab === "banned" &&
            "border-b-[3px] lg:border-b-0 lg:border-l-[3px] border-blue-400 font-bold text-gray-600",
          "p-1.5 cursor-pointer lg:w-full hover:text-blue-500 px-4 lg:px-1.5"
        )}
      >
        <Link href="/user/setting?tab=banned" className="pl-1">
          Đã chặn
        </Link>
      </li>
      <li
        className={cn(
          tab === "change-password" &&
            "border-b-[3px] lg:border-b-0 lg:border-l-[3px]  border-blue-400 font-bold text-gray-600",
          "p-1.5 cursor-pointer lg:w-full hover:text-blue-500"
        )}
      >
        <Link href="/user/setting?tab=change-password" className="pl-1">
          Đổi mật khẩu
        </Link>
      </li>
    </ul>
  );
};
