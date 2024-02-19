import { Bookmark } from "@/components/icons/Bookmark";
import { ChatSquare } from "@/components/icons/ChatSquare";
import { Share } from "@/components/icons/Share";
import { TriangleDown } from "@/components/icons/TriangleDown";
import { TriangleUp } from "@/components/icons/TriangleUp";
import { UserPlus } from "@/components/icons/UserPlus";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { HTMLAttributes } from "react";
interface StickyBarProps extends HTMLAttributes<HTMLUListElement> {
  changeTab: (tab: number) => void;
  tab: number;
}
export const Stickybar = ({ changeTab, tab, className }: StickyBarProps) => {
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
          tab === 1 &&
            "border-b-[3px] lg:border-b-0 lg:border-l-[3px] border-blue-400 font-bold text-gray-600",
          "p-1.5 cursor-pointer lg:w-full hover:text-blue-500 px-4 lg:px-1.5"
        )}
        onClick={() => changeTab(1)}
      >
        <span className="pl-1">Tài khoản</span>
      </li>
      <li
        className={cn(
          tab === 2 &&
            "border-b-[3px] lg:border-b-0 lg:border-l-[3px] border-blue-400 font-bold text-gray-600",
          "p-1.5 cursor-pointer lg:w-full hover:text-blue-500 px-4 lg:px-1.5"
        )}
        onClick={() => changeTab(2)}
      >
        <span className="pl-1">Series</span>
      </li>
      <li
        className={cn(
          tab === 3 &&
            "border-b-[3px] lg:border-b-0 lg:border-l-[3px] border-blue-400 font-bold text-gray-600",
          "p-1.5 cursor-pointer lg:w-full hover:text-blue-500 px-4 lg:px-1.5"
        )}
        onClick={() => changeTab(3)}
      >
        <span className="pl-1">Đã chặn</span>
      </li>
      <li
        className={cn(
          tab === 4 &&
            "border-b-[3px] lg:border-b-0 lg:border-l-[3px]  border-blue-400 font-bold text-gray-600",
          "p-1.5 cursor-pointer lg:w-full hover:text-blue-500"
        )}
        onClick={() => changeTab(4)}
      >
        <span className="pl-1">Đổi mật khẩu</span>
      </li>
    </ul>
  );
};
