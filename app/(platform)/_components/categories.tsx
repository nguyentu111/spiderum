"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useToggle } from "usehooks-ts";

export const Categories = () => {
  const [open, toggleOpen] = useToggle(false);
  return (
    <div className="mb-6">
      <h2 className="my-2 uppercase font-semibold">Chủ đề</h2>
      <div
        className="flex flex-wrap text-sm  overflow-hidden transition-[max-height] ease-in-out duration-500"
        style={{
          maxHeight: open ? "500px" : "91px",
        }}
      >
        <Link
          href="/category/quandiem-tranhluan"
          className="border border-[#c4c4c4] rounded-full py-2 px-4 mb-2 mr-1.5"
        >
          Tai chinh
        </Link>
        <Link
          href="/category/quandiem-tranhluan"
          className="border border-[#c4c4c4] rounded-full py-2 px-4 mb-2 mr-1.5"
        >
          Quan diem - tranh luan
        </Link>
        <Link
          href="/category/quandiem-tranhluan"
          className="border border-[#c4c4c4] rounded-full py-2 px-4 mb-2 mr-1.5"
        >
          Khoa hoc cong nghe
        </Link>
        <Link
          href="/category/quandiem-tranhluan"
          className="border border-[#c4c4c4] rounded-full py-2 px-4 mb-2 mr-1.5"
        >
          Giao duc
        </Link>
        <Link
          href="/category/quandiem-tranhluan"
          className="border border-[#c4c4c4] rounded-full py-2 px-4 mb-2 mr-1.5"
        >
          movies
        </Link>
        <Link
          href="/category/quandiem-tranhluan"
          className="border border-[#c4c4c4] rounded-full py-2 px-4 mb-2 mr-1.5"
        >
          Du lich
        </Link>
        <Link
          href="/category/quandiem-tranhluan"
          className="border border-[#c4c4c4] rounded-full py-2 px-4 mb-2 mr-1.5"
        >
          Tai chinh
        </Link>
        <Link
          href="/category/quandiem-tranhluan"
          className="border border-[#c4c4c4] rounded-full py-2 px-4 mb-2 mr-1.5"
        >
          Quan diem - tranh luan
        </Link>
        <Link
          href="/category/quandiem-tranhluan"
          className="border border-[#c4c4c4] rounded-full py-2 px-4 mb-2 mr-1.5"
        >
          Khoa hoc cong nghe
        </Link>
        <Link
          href="/category/quandiem-tranhluan"
          className="border border-[#c4c4c4] rounded-full py-2 px-4 mb-2 mr-1.5"
        >
          Giao duc
        </Link>
        <Link
          href="/category/quandiem-tranhluan"
          className="border border-[#c4c4c4] rounded-full py-2 px-4 mb-2 mr-1.5"
        >
          movies
        </Link>
        <Link
          href="/category/quandiem-tranhluan"
          className="border border-[#c4c4c4] rounded-full py-2 px-4 mb-2 mr-1.5"
        >
          Du lich
        </Link>
      </div>
      <Button className="rounded-full" variant={"primary"} onClick={toggleOpen}>
        {open ? "Ẩn bớt" : "Hiển thị thêm"}
      </Button>
    </div>
  );
};
