import { ThreeDots } from "@/components/icons/ThreeDots";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";

export const Menu = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="px-2 h-full flex items-center">
          <ThreeDots className="text-gray-500" />
        </button>
      </PopoverTrigger>
      <PopoverContent align="end" className="py-0" sideOffset={0}>
        <Button
          className="p-4 w-full flex justify-start font-normal h-auto hover:text-gray-900 hover:bg-gray-100 text-gray-700 rounded-none"
          variant={"ghost"}
        >
          Bình luận
        </Button>

        <Button
          className="p-4 w-full flex justify-start font-normal h-auto hover:text-gray-900 hover:bg-gray-100 text-gray-700 rounded-none"
          variant={"ghost"}
        >
          Người theo dõi
        </Button>
        <Button
          className="p-4 w-full flex justify-start font-normal h-auto hover:text-gray-900 hover:bg-gray-100 text-gray-700 rounded-none"
          variant={"ghost"}
        >
          Đang theo dõi
        </Button>
        <Button
          className="p-4 w-full flex justify-start font-normal h-auto hover:text-gray-900 hover:bg-gray-100 text-gray-700 rounded-none"
          variant={"ghost"}
        >
          Nháp
        </Button>
      </PopoverContent>
    </Popover>
  );
};
