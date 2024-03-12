"use client";
import {
  calculateReadTimeFromContent,
  cn,
  formatTimeToDistant,
} from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { HTMLAttributes } from "react";
import { TriangleUp } from "./icons/TriangleUp";
import { Chat } from "./icons/Chat";
import { Post } from "@/types";
import { SavePost, SavePostProps } from "./save-post";
import { Vote, VoteCallbackProps } from "./vote";
import { useOptimisticPost } from "@/hooks/use-optimistic-post";

interface CardVerticalProps
  extends HTMLAttributes<HTMLDivElement>,
    SavePostProps,
    VoteCallbackProps {
  showCategory?: boolean;
  post: Post;
}
export const CardVertical = ({
  showCategory,
  className,
  post,
  onSave,
  onSaved,
  onUnsave,
  onUnsaved,
  onLike,
  onLiked,
  onVote,
  onUnvote,
  onUnvoted,
  onDislike,
  onDisliked,
  onVoted,
  ...rest
}: CardVerticalProps) => {
  const { dispatch, optimisticPost } = useOptimisticPost(post);

  const category = post.categories[0];

  return (
    <div
      className={cn(
        "flex flex-col  md:flex-row gap-2 md:gap-6 max-w-full overflow-hidden ",
        className
      )}
      {...rest}
    >
      <Link
        href={`/post/${post.slug}`}
        className="md:w-[18rem] relative w-full  pt-[62.5%] md:pt-0"
      >
        <Image
          src={
            post.thumbnail ??
            "https://images.spiderum.com/sp-thumbnails/341857b0ac9111eeabed5537d8e13793.png"
          }
          alt=""
          fill
          sizes="(min-width: 1192px) 30vw ,(min-width: 768px) 50vw,(min-width: ) , 25vw"
          className="rounded object-cover"
        />
      </Link>
      <div className="w-full">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <div className="flex items-center">
              <Link
                href={`/category/${category.slug}`}
                className="hidden lg:block relative uppercase dot-after text-12  after:absolute after:w-1 after:h-1 after:rounded-full after:top-1/2 after:-translate-y-1/2 after:-right-[0.7rem]  after:bg-[#c4c4c4] mr-4"
              >
                {category.name}
              </Link>
              <div className="flex items-start text-[12px] text-[#909399]">
                {calculateReadTimeFromContent(post.content)} phút đọc
              </div>
            </div>
            <SavePost
              className="md:my-0"
              dispatch={dispatch}
              post={optimisticPost}
              onSaved={onSaved}
              onUnsaved={onUnsaved}
              onSave={onSave}
              onUnsave={onUnsave}
            />
          </div>
          <div className="mb-2">
            <div className="mt-2   ">
              <Link href={`/post/${post.slug}`}>
                <h2 className="text-sm line-clamp-2 font-semibold mb-2 sm:text-[18px] text-ellipsis overflow-hidden">
                  {post.name}
                </h2>
              </Link>
            </div>
          </div>
          <div className="text-sm mb-2">{post.description}</div>
        </div>
        <div className="flex items-center">
          <Link
            href={`/user/${post.author?.username}`}
            className="mr-3 relative w-10 h-10 lg:w-12 lg:h-12"
          >
            <Image
              src={
                post.author?.avatar_url ??
                "https://images.spiderum.com/sp-xs-avatar/001befb0738b11e98bc52d654e80e4ac.jpg"
              }
              alt=""
              fill
              className="rounded-full"
              sizes=""
            />
          </Link>
          <Link
            href={`/user/${post.author?.username}`}
            className="text-[14px] font-semibold"
          >
            {post.author?.alias}
          </Link>
          <div className="ml-4 text-[12px] text-[#909399] relative before:absolute before:w-1 before:h-1 before:rounded-full before:top-1/2 before:-left-2  before:bg-[#c4c4c4]">
            {formatTimeToDistant(post.created_at)}
          </div>
          <div className="ml-auto flex items-center text-xs text-[#161616]">
            <Vote
              dispatch={dispatch}
              post={optimisticPost}
              type="half-horizontal"
              onLike={onLike}
              onLiked={onLiked}
              onVote={onVote}
              onUnvote={onUnvote}
              onUnvoted={onUnvoted}
              onDislike={onDislike}
              onDisliked={onDisliked}
              onVoted={onVoted}
            />
            <Link
              href={`/post/${post.slug}#comments`}
              className="my-2 text-[rgba(113,128,150,1)] ml-3"
            >
              <Chat size={17} />
            </Link>
            <span className="ml-1">{post.comments_count}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
