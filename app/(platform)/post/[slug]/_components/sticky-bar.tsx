"use client";
import { Bookmark } from "@/components/icons/Bookmark";
import { ChatSquare } from "@/components/icons/ChatSquare";
import { Share } from "@/components/icons/Share";
import { Post } from "@/types";
import Link from "next/link";
import { Vote } from "./vote";
import Image from "next/image";
import { UserPlus } from "@/components/icons/UserPlus";
import { SavePost } from "./save-post";
import { Dispatch } from "react";
import { useOptimisticPost } from "@/hooks/useOptimisticPost";
export const Stickybar = ({
  post,
  dispatch,
}: {
  post: Post;
  dispatch: ReturnType<typeof useOptimisticPost>["dispatch"];
}) => {
  return (
    <div
      className="flex flex-col fixed transition-opacity duration-200 ease-in-out items-center z-[99]"
      style={{ left: "calc((100% - 650px) / 2 - 14vw)", top: "20%" }}
    >
      <Vote type="vertical" post={post} dispatch={dispatch} />
      <div className="my-2 border-[4px] border-dashed rounded-full overflow-hidden ">
        <Link
          href="/user/abc"
          className="w-10 h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14"
        >
          <Image
            src={post.author?.avatar_url as string}
            alt=""
            width={56}
            height={56}
            className=""
          />
        </Link>
      </div>
      <button className="-mt-[1.3rem] shadow-sm shadow-[#e8dede] h-5 w-5 rounded-full bg-white text-[rgb(113,128,150)] flex items-center justify-center">
        <UserPlus width={12} height={16} viewBox="0 0 640 512" />
      </button>
      <div>
        <SavePost post={post} dispatch={dispatch} />
        <Link
          href={`/post/${post.slug}#comments`}
          className="h-8 my-4 flex flex-col items-center justify-between"
        >
          <ChatSquare
            width={18}
            height={19}
            viewBox="0 0 18 19"
            className="flex-shrink-0 text-[#718096]"
          />
          <span className="text-12 text-[#718096]">{post.comments_count}</span>
        </Link>
        <div className="h-8 my-4 flex flex-col items-center justify-between">
          <Share size={25} viewBox="0 0 48 48" className="text-[#718096]" />
        </div>
      </div>
    </div>
  );
};
