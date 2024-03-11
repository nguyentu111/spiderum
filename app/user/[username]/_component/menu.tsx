"use client";
import { ThreeDots } from "@/components/icons/ThreeDots";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export const Menu = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const user = session?.user!;
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
          onClick={() => router.push(`/user/${user.username}?tab=savedPosts`)}
          className="md:hidden cursor-pointer p-4 w-full justify-start font-normal h-auto hover:text-gray-900 hover:bg-gray-100 text-gray-700 rounded-none"
          variant={"ghost"}
          asChild
        >
          <div>Đã lưu</div>
        </Button>
        <Button
          onClick={() => router.push(`/user/${user.username}?tab=comments`)}
          className="cursor-pointer p-4 w-full flex justify-start font-normal h-auto hover:text-gray-900 hover:bg-gray-100 text-gray-700 rounded-none"
          variant={"ghost"}
          asChild
        >
          <div> Bình luận</div>
        </Button>

        <Button
          onClick={() => router.push(`/user/${user.username}?tab=followers`)}
          className="cursor-pointer p-4 w-full flex justify-start font-normal h-auto hover:text-gray-900 hover:bg-gray-100 text-gray-700 rounded-none"
          variant={"ghost"}
          asChild
        >
          <div>Người theo dõi</div>
        </Button>
        <Button
          onClick={() => router.push(`/user/${user.username}?tab=following`)}
          className="cursor-pointer p-4 w-full flex justify-start font-normal h-auto hover:text-gray-900 hover:bg-gray-100 text-gray-700 rounded-none"
          variant={"ghost"}
          asChild
        >
          <div>Đang theo dõi</div>
        </Button>
        <Button
          onClick={() => router.push(`/user/${user.username}?tab=draft`)}
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
