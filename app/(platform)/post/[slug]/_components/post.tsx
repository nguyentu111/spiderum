"use client";
import Link from "next/link";

import { montserrat } from "@/app/fonts";
import { Bookmark } from "@/components/icons/Bookmark";
import { FacebookCircle } from "@/components/icons/FacebookCircle";
import { ThreeDots } from "@/components/icons/ThreeDots";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Post as TPost } from "@/types";
import Image from "next/image";
import { Comments } from "./comments";
import { PostContent } from "./post-content";
import { Stickybar } from "./sticky-bar";
import { Vote } from "../../../../../components/vote";
import { useOptimisticPost } from "@/hooks/use-optimistic-post";
import { SavePost } from "../../../../../components/save-post";
import { PostCarousel } from "@/components/post-carousel";
import { useEffect } from "react";
import { axiosClient } from "@/lib/fetcher";
type Props = {
  post: TPost;
  otherPopularPosts: TPost[];
};

export const Post = ({ post, otherPopularPosts }: Props) => {
  const { dispatch, optimisticPost } = useOptimisticPost(post);
  const category = optimisticPost.categories[0];
  useEffect(() => {
    const updateViewTimer = setTimeout(async () => {
      try {
        const { data } = await axiosClient.patch(
          `/posts/count-view/${post.slug}`
        );
      } catch (e) {
        // console.log(e);
      }
    }, 300);
    return () => clearTimeout(updateViewTimer);
  }, []);
  return (
    <div className="text-14 leading-[1.5385615384] bg-white flex flex-col items-center min-h-[80vh]">
      <div className="py-[15px] px-[10px] mt-2 xl:w-[700px] lg:w-[650px] md:w-[600px] w-full">
        <div className="text-gray-600 mt-6 mb-1.5">
          <Link
            href={`/category/${category.slug}`}
            className=" hover:underline"
          >
            {category.name}
          </Link>
        </div>
        <h1
          className={cn(
            "md:text-[42px] md:leading-[58px] text-gray-800",
            montserrat.className
          )}
        >
          {post.name}
        </h1>
        {/* <div className="my-1">
          <p className="italic text-16 text-gray-500 break-words">
            {optimisticPost.like}
          </p>
        </div> */}
        <div className="mt-6 flex items-center">
          <Image
            src={optimisticPost.author?.avatar_url as string}
            alt=""
            width={56}
            height={56}
            className="rounded-full"
          />
          <div className="mx-2.5">
            <div className="font-semibold">{optimisticPost.author?.alias}</div>
            <div className="text-gray-400 text-[13px]">
              {optimisticPost.created_at}
            </div>
          </div>
          <div className="ml-auto">
            <ThreeDots />
          </div>
        </div>
      </div>
      <div className="my-2.5 min-h-screen xl:w-[700px] lg:w-[650px] md:w-[600px] w-full px-2 md:px-4">
        <PostContent data={optimisticPost.content} />
        <Stickybar post={optimisticPost} dispatch={dispatch} />
      </div>
      <div className="py-[15px] px-[10px] mb-5 xl:w-[700px] lg:w-[650px] md:w-[600px] w-full flex items-center justify-between border-b border-[#e3ebf6]">
        <div className="flex items-center">
          <Vote type="horizontal" post={optimisticPost} dispatch={dispatch} />
          <div className="text-center before:content-['·'] before:mx-2 text-gray-500">
            {optimisticPost.view + 1} lượt xem
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button>
            <FacebookCircle
              size={25}
              viewBox="0 0 500 500"
              className="text-[var(--facebook-logo-color)]"
            />
          </button>
          <SavePost post={optimisticPost} dispatch={dispatch} />
        </div>
      </div>
      <div className="flex items-center justify-center p-4 gap-4 flex-col lg:justify-between lg:p-0 lg:flex-row lg:items-start xl:w-[700px] lg:w-[650px] md:w-[600px]">
        <div className="lg:mr-2.5 mb-2.5s lg:flex-1 w-full pb-4 rounded">
          <div className="flex">
            <Image
              src={optimisticPost.author?.avatar_url as string}
              alt=""
              width={48}
              height={48}
              className="rounded-full"
            />
            <div className="mx-2.5">
              <div className="font-semibold">
                {optimisticPost.author?.alias}
              </div>
              <div className="text-gray-400 text-[13px]">
                {optimisticPost.created_at}
              </div>
            </div>
            <div className="ml-auto">
              <Button variant={"secondary"} className="rounded">
                Follow
              </Button>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-between lg:flex-1 pb-4 w-full rounded">
          <div>
            <Link className="" href={`/category/${category.slug}`}>
              <strong>{category.name}</strong>
            </Link>
            <p className="text-xs text-gray-500">/{category.slug}</p>
          </div>
          <Button variant={"secondary"} className="rounded">
            Follow
          </Button>
        </div>
      </div>
      <div className="w-full md:w-[750px] lg:w-[900px] mb-6 px-4">
        <div className="my-6">
          <strong>Bài viết nổi bật</strong>
        </div>
        <PostCarousel posts={otherPopularPosts} />
      </div>
      <div className=" xl:w-[700px] lg:w-[768px] xs:w-[640px] w-full">
        <Comments post={post} />
      </div>
    </div>
  );
};
