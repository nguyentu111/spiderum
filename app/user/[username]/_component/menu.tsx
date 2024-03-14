"use client";
import { ThreeDots } from "@/components/icons/ThreeDots";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export const Menu = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const user = session?.user!;
  const tab = useSearchParams().get("tab");
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
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
          onClick={() => {
            router.push(`/user/${user.username}?tab=savedPosts`);
            setOpen(false);
          }}
          className="md:hidden cursor-pointer p-4 w-full justify-start font-normal h-auto hover:text-gray-900 hover:bg-gray-100 text-gray-700 rounded-none"
          variant={"ghost"}
          asChild
        >
          <div>Đã lưu</div>
        </Button>
        <Button
          onClick={() => {
            router.push(`/user/${user.username}?tab=comments`);
            setOpen(false);
          }}
          className={cn(
            "cursor-pointer p-4 w-full flex justify-start font-normal h-auto hover:text-gray-900 hover:bg-gray-100 text-gray-700 rounded-none",
            tab == "comments" && "border-l-4 border-blue-500"
          )}
          variant={"ghost"}
          asChild
        >
          <div> Bình luận</div>
        </Button>

        <Button
          onClick={() => {
            router.push(`/user/${user.username}?tab=followers`);
            setOpen(false);
          }}
          className={cn(
            "cursor-pointer p-4 w-full flex justify-start font-normal h-auto hover:text-gray-900 hover:bg-gray-100 text-gray-700 rounded-none",
            tab == "followers" && "border-l-4 border-blue-500"
          )}
          variant={"ghost"}
          asChild
        >
          <div>Người theo dõi</div>
        </Button>
        <Button
          onClick={() => {
            router.push(`/user/${user.username}?tab=following`);
            setOpen(false);
          }}
          className={cn(
            "cursor-pointer p-4 w-full flex justify-start font-normal h-auto hover:text-gray-900 hover:bg-gray-100 text-gray-700 rounded-none",
            tab == "following" && "border-l-4 border-blue-500"
          )}
          variant={"ghost"}
          asChild
        >
          <div>Đang theo dõi</div>
        </Button>
        <Button
          onClick={() => {
            router.push(`/user/${user.username}?tab=draft`);
            setOpen(false);
          }}
          className={cn(
            "cursor-pointer p-4 w-full flex justify-start font-normal h-auto hover:text-gray-900 hover:bg-gray-100 text-gray-700 rounded-none",
            tab == "draft" && "border-l-4 border-blue-500"
          )}
          variant={"ghost"}
          asChild
        >
          <div>Nháp</div>
        </Button>
      </PopoverContent>
    </Popover>
  );
};
