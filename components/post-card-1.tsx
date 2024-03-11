import { Bookmark } from "@/components/icons/Bookmark";
import { Button } from "@/components/ui/button";
import { cn, formatTimeToDistant } from "@/lib/utils";
import { Post } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { HTMLAttributes } from "react";

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
        "flex md:flex-col  gap-2 max-w-full overflow-hidden ",
        className
      )}
      {...rest}
    >
      <Link
        href={`/post/${post.slug}`}
        className="md:aspect-video relative sm:w-[12rem] min-w-24 sm:flex-shrink-0  md:w-auto"
      >
        <Image
          src={
            post.thumbnail ??
            "https://images.spiderum.com/sp-thumbnails/341857b0ac9111eeabed5537d8e13793.png"
          }
          alt=""
          fill
          className="rounded object-cover"
        />
      </Link>
      <div className="flex-shrink">
        <div className="flex flex-col">
          <div className="flex justify-between">
            <div className="flex items-center">
              {showCategory && (
                <Link
                  href={`/category/${category.slug}`}
                  className="relative uppercase dot-after text-12  after:absolute after:w-1 after:h-1 after:rounded-full after:top-1/2 after:-translate-y-1/2 after:-right-[0.7rem]  after:bg-[#c4c4c4] mr-4"
                >
                  {category.name}
                </Link>
              )}

              <div className="flex items-start text-[12px] text-[#909399]">
                14 phút đọc
              </div>
            </div>
            <Button
              variant={"ghost"}
              className="flex items-center h-[25px] p-0"
            >
              <Bookmark size={20} viewBox="0 0 18 24" />
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
        </div>
        <div className="flex items-center">
          <Link href={`/user/${post.author?.username}`} className="mr-3">
            <Image
              src={
                post.author?.avatar_url ??
                "https://images.spiderum.com/sp-xs-avatar/001befb0738b11e98bc52d654e80e4ac.jpg"
              }
              alt=""
              width={24}
              height={24}
              className="rounded-full"
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
        </div>
      </div>
    </div>
  );
};
