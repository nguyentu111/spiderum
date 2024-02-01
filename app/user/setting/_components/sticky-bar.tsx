import { Bookmark } from "@/components/icons/Bookmark";
import { ChatSquare } from "@/components/icons/ChatSquare";
import { Share } from "@/components/icons/Share";
import { TriangleDown } from "@/components/icons/TriangleDown";
import { TriangleUp } from "@/components/icons/TriangleUp";
import { UserPlus } from "@/components/icons/UserPlus";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
interface StickyBarProps {
  changeTab: (tab: number) => void;
  tab: number;
}
export const Stickybar = ({ changeTab, tab }: StickyBarProps) => {
  return (
    <ul
      className="flex flex-col items-start  fixed transition-opacity duration-200 ease-in-out   select-none w-[11rem]"
      style={{ left: "calc((100% - 650px) / 2 - 14vw)", top: "20%" }}
    >
      <li
        className={cn(
          tab === 1 && "border-l-[3px] border-blue-400 font-bold text-gray-600",
          "p-1.5 cursor-pointer w-full hover:text-blue-500"
        )}
        onClick={() => changeTab(1)}
      >
        <span className="pl-1">Tài khoản</span>
      </li>
      <li
        className={cn(
          tab === 2 && "border-l-[3px] border-blue-400 font-bold text-gray-600",
          "p-1.5 cursor-pointer w-full hover:text-blue-500"
        )}
        onClick={() => changeTab(2)}
      >
        <span className="pl-1">Series</span>
      </li>
      <li
        className={cn(
          tab === 3 && "border-l-[3px] border-blue-400 font-bold text-gray-600",
          "p-1.5 cursor-pointer w-full hover:text-blue-500"
        )}
        onClick={() => changeTab(3)}
      >
        <span className="pl-1">Đã chặn</span>
      </li>
      <li
        className={cn(
          tab === 4 &&
            "border-l-[3px]  border-blue-400 font-bold text-gray-600",
          "p-1.5 cursor-pointer w-full hover:text-blue-500"
        )}
        onClick={() => changeTab(4)}
      >
        <span className="pl-1">Đổi mật khẩu</span>
      </li>
    </ul>
  );
};
