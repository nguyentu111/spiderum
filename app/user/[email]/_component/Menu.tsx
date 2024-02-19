"use client";
import { ThreeDots } from "@/components/icons/ThreeDots";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useCurrentUser } from "@/hooks/use-current-user";
import { ExtendedUser } from "@/next-auth";
import { useRouter } from "next/navigation";

export const Menu = () => {
  const router = useRouter();
  const user = useCurrentUser() as ExtendedUser;
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="px-2 h-full flex items-center py-2">
          <ThreeDots className="text-gray-500" />
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className="py-0"
        sideOffset={3}
        alignOffset={0}
      >
        <Button
          onClick={() => router.push(`/user/${user.name}?tab=savedPosts`)}
          className="md:hidden cursor-pointer p-4 w-full justify-start font-normal h-auto hover:text-gray-900 hover:bg-gray-100 text-gray-700 rounded-none"
          variant={"ghost"}
          asChild
        >
          <div>Đã lưu</div>
        </Button>
        <Button
          onClick={() => router.push(`/user/${user.name}?tab=comments`)}
          className="cursor-pointer p-4 w-full flex justify-start font-normal h-auto hover:text-gray-900 hover:bg-gray-100 text-gray-700 rounded-none"
          variant={"ghost"}
          asChild
        >
          <div> Bình luận</div>
        </Button>

        <Button
          onClick={() => router.push(`/user/${user.name}?tab=followers`)}
          className="cursor-pointer p-4 w-full flex justify-start font-normal h-auto hover:text-gray-900 hover:bg-gray-100 text-gray-700 rounded-none"
          variant={"ghost"}
          asChild
        >
          <div>Người theo dõi</div>
        </Button>
        <Button
          onClick={() => router.push(`/user/${user.name}?tab=following`)}
          className="cursor-pointer p-4 w-full flex justify-start font-normal h-auto hover:text-gray-900 hover:bg-gray-100 text-gray-700 rounded-none"
          variant={"ghost"}
          asChild
        >
          <div>Đang theo dõi</div>
        </Button>
        <Button
          onClick={() => router.push(`/user/${user.name}?tab=draft`)}
          className="cursor-pointer p-4 w-full flex justify-start font-normal h-auto hover:text-gray-900 hover:bg-gray-100 text-gray-700 rounded-none"
          variant={"ghost"}
          asChild
        >
          <div>Nháp</div>
        </Button>
      </PopoverContent>
    </Popover>
  );
};
