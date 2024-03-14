"use client";
import { Button } from "@/components/ui/button";
import { Category } from "@/types";
import Link from "next/link";
import { useToggle } from "usehooks-ts";

export const Categories = ({ categories }: { categories: Category[] }) => {
  const [open, toggleOpen] = useToggle(false);
  return (
    <div className="mb-6">
      <h2 className="my-2 uppercase font-semibold">Chủ đề</h2>
      <div
        className="flex flex-wrap text-sm  overflow-hidden transition-[max-height] ease-in-out duration-500"
        style={{
          maxHeight: open ? "300px" : "91px",
        }}
      >
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/category/${cat.slug}`}
            className="border border-[#c4c4c4] rounded-full py-2 px-4 mb-2 mr-1.5"
          >
            {cat.name}
          </Link>
        ))}
      </div>
      <Button className="rounded-full" variant={"primary"} onClick={toggleOpen}>
        {open ? "Ẩn bớt" : "Hiển thị thêm"}
      </Button>
    </div>
  );
};
