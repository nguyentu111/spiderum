import { Bar } from "@/components/icons/Bar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";

export const HeaderCategory = () => {
  return (
    <div className="flex justify-between items-center">
      <ul className="flex items-center ">
        <li>
          <Link
            className="flex items-center h-[3.5rem] uppercase text-[12.8px]"
            href="/category/quandiem-tranhluan"
          >
            quan điểm - tranh luận
          </Link>
        </li>
        <li className="ml-16">
          <Link
            className="flex items-center h-[3.5rem] uppercase text-[12.8px]"
            href="/"
          >
            khoa học - công nghệ
          </Link>
        </li>
        <li className="ml-16">
          <Link
            className="flex items-center h-[3.5rem] uppercase text-[12.8px]"
            href="/"
          >
            tài chính
          </Link>
        </li>
        <li className="ml-16">
          <Link
            className="flex items-center h-[3.5rem] uppercase text-[12.8px]"
            href="/"
          >
            du lịch
          </Link>
        </li>
        <li className="ml-16">
          <Link
            className="flex items-center h-[3.5rem] uppercase text-[12.8px]"
            href="/"
          >
            sách
          </Link>
        </li>
        <li className="ml-16">
          <Link
            className="flex items-center h-[3.5rem] uppercase text-[12.8px]"
            href="/"
          >
            tâm lý học
          </Link>
        </li>
      </ul>
      <Popover>
        <PopoverTrigger asChild>
          <button aria-label="menu">
            <div className="px-4 py-[19px]" role="button">
              <Bar size={18} viewBox="0 0 500 500" />
            </div>
          </button>
        </PopoverTrigger>
        <PopoverContent
          align="end"
          className="py-0 max-h-[calc(100vh-12rem)] overflow-auto"
          sideOffset={0}
        >
          <div className="flex flex-col">
            <Link href="/" className="px-4 py-3">
              Chuyện thầm kín
            </Link>
            <Link href="/" className="px-4 py-3">
              Thể thao
            </Link>
            <Link href="/" className="px-4 py-3">
              Giáo dục
            </Link>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
