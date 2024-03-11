import { Bookmark } from "@/components/icons/Bookmark";
import { ThreeDots } from "@/components/icons/ThreeDots";
import { Button } from "@/components/ui/button";
import { cn, formatTimeToDistant } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { HTMLAttributes } from "react";
import { TriangleUp } from "./icons/TriangleUp";
import { Chat } from "./icons/Chat";
import { Post } from "@/types";

interface CardVerticalProps extends HTMLAttributes<HTMLDivElement> {
  showCategory?: boolean;
  post: Post;
}
export const CardVertical = ({
  showCategory,
  className,
  post,
  ...rest
}: CardVerticalProps) => {
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
          sizes="(min-width: 1192px) 3 ,(min-width: 768px) 50vw,(min-width: ) , 25vw"
          className="rounded object-cover"
        />
      </Link>
      <div>
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
                14 phút đọc
              </div>
            </div>
            <Button
              variant={"ghost"}
              className="flex items-center h-[25px] p-0"
            >
              <Bookmark size={25} viewBox="0 0 500 500" />
              {/* <ThreeDots
              width={4}
              height={16}
              viewBox="0 0 4 16"
              className="w-4 cursor-pointer h-full"
            /> */}
            </Button>
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
          <div className="text-sm mb-2">
            Mất cân bằng trong phát triển là điều rất dễ xảy ra, vậy mất cân
            bằng như thế nào để vẫn lành mạnh? Mình muốn bàn...
          </div>
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
            <button className="my-2 text-[rgba(113,128,150,1)]">
              <TriangleUp width={17} height={15} viewBox="0 0 17 15" />
            </button>
            <span className="ml-1">{post.like}</span>
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
