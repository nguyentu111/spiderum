"use client";
import { Bookmark } from "@/components/icons/Bookmark";
import { Feather } from "@/components/icons/Feather";
import { Stack } from "@/components/icons/Stack";
import { cn } from "@/lib/utils";
import { Post } from "@/types";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

type Props = {
  postsCount: number;
  username: string;
  isLoggedUser: boolean;
};

const Tabs = ({ postsCount, username, isLoggedUser }: Props) => {
  const tab = useSearchParams().get("tab");
  return (
    <div className="flex">
      <Link
        href={`/user/${username}`}
        className={cn(
          !tab && "border-b-2 border-[#3398d4] font-bold",
          "flex items-center justify-center px-4 py-2 "
        )}
      >
        <Feather className="text-gray-400 mr-2" size={16} />
        <span className="ml-2 whitespace-nowrap">Bài viết ({postsCount})</span>
      </Link>
      <Link
        href={`/user/${username}?tab=series`}
        className={cn(
          tab == "series" && "border-b-2 border-[#3398d4] font-bold",
          "flex items-center justify-center px-4 py-2 "
        )}
      >
        <Stack className="text-gray-400 mr-2" size={16} />
        <span className="ml-2">Series</span>
      </Link>
      {isLoggedUser && (
        <Link
          href={`/user/${username}?tab=savedPosts`}
          className={cn(
            tab == "savedPosts" && "border-b-2 border-[#3398d4] font-bold",
            "items-center justify-center px-4 py-2 hidden md:flex"
          )}
        >
          <Bookmark
            className="text-gray-400 mr-2"
            size={18}
            viewBox="0 0 500 500"
          />
          <span className="ml-2">Đã lưu</span>
        </Link>
      )}
    </div>
  );
};

export default Tabs;
