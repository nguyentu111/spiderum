import { Bar } from "@/components/icons/Bar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Category } from "@/types";
import Link from "next/link";

export const HeaderCategory = ({ categories }: { categories: Category[] }) => {
  return (
    <div className="flex justify-between items-center">
      <ul className="flex items-center ">
        {categories.slice(0, 6).map((cat) => (
          <li key={cat.id}>
            <Link
              className="flex items-center h-[3.5rem] uppercase text-[12.8px] mr-16"
              href={`/category/${cat.slug}`}
            >
              {cat.name}
            </Link>
          </li>
        ))}
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
            {categories.slice(6).map((cat) => (
              <PopoverClose asChild key={cat.id}>
                <Link
                  href={`/category/${cat.slug}`}
                  className="px-4 py-3  text-[12.8px] uppercase"
                >
                  {cat.name}
                </Link>
              </PopoverClose>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};
