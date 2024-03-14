"use client";

import { raleway } from "@/app/fonts";
import { FeedPagination } from "@/components/feed-pagination";
import { File } from "@/components/icons/File";
import { User } from "@/components/icons/User";
import { CardVertical } from "@/components/post-card-2";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SearchPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const query = searchParams.q;
  const type = searchParams.type;

  return (
    <div className="search-container px-2 md:px-4 flex flex-col items-center">
      <span
        className={cn("my-8 text-3xl text-center font-bold", raleway.className)}
      >
        Kết quả tìm kiếm: <i>{query}</i>
      </span>
      <div className="md:p-7 py-1 px-2 w-full lg:max-w-screen-md border rounded">
        <div className="flex border-b">
          <Link
            href={`/search?q=${query}&type=post&page=1`}
            className={cn(
              "flex items-center justify-center w-1/2  font-bold h-11 border-b-4 border-transparent hover:border-gray-100",
              type === "post" && " !border-blue-400 !text-blue-400"
            )}
          >
            <File className="" viewBox="0 0 384 512" width={12} height={16} />
            <span className="ml-4 hidden md:flex whitespace-nowrap">
              Bài viết
            </span>
          </Link>
          <Link
            href={`/search?q=${query}&type=user&page=1`}
            className={cn(
              "flex items-center justify-center w-1/2  font-bold h-11 border-b-4 border-transparent hover:border-gray-100",
              type === "user" && " !border-blue-400 text-blue-400"
            )}
          >
            <User className="" viewBox="0 0 448 512" width={12} height={16} />
            <span className="ml-4 hidden md:flex whitespace-nowrap">
              Người dùng
            </span>
          </Link>
        </div>
        {type === "post" && (
          <div className="flex flex-col gap-14 mt-7">
            {/* <CardVertical />
            <CardVertical />
            <CardVertical />
            <CardVertical /> */}
          </div>
        )}
        {type === "user" && (
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
            <Link
              href="/user/tunguyen123"
              className="flex items-center border px-4 py-2 rounded group"
            >
              <Image
                src="https://images.spiderum.com/sp-xs-avatar/ea9b59607cad11ee9e2e4998729e9d6a.jpeg"
                alt=""
                width={56}
                height={56}
                className="rounded-full"
              />
              <div className="font-semibold ml-4 group-hover:text-blue-400 group-hover:underline">
                pinkpig
              </div>
            </Link>
            <Link
              href="/user/tunguyen123"
              className="flex items-center border px-4 py-2 rounded group"
            >
              <Image
                src="https://images.spiderum.com/sp-xs-avatar/ea9b59607cad11ee9e2e4998729e9d6a.jpeg"
                alt=""
                width={56}
                height={56}
                className="rounded-full"
              />
              <div className="font-semibold ml-4 group-hover:text-blue-400 group-hover:underline">
                pinkpig
              </div>
            </Link>
            <Link
              href="/user/tunguyen123"
              className="flex items-center border px-4 py-2 rounded group"
            >
              <Image
                src="https://images.spiderum.com/sp-xs-avatar/ea9b59607cad11ee9e2e4998729e9d6a.jpeg"
                alt=""
                width={56}
                height={56}
                className="rounded-full"
              />
              <div className="font-semibold ml-4 group-hover:text-blue-400 group-hover:underline">
                pinkpig
              </div>
            </Link>
            <Link
              href="/user/tunguyen123"
              className="flex items-center border px-4 py-2 rounded group"
            >
              <Image
                src="https://images.spiderum.com/sp-xs-avatar/ea9b59607cad11ee9e2e4998729e9d6a.jpeg"
                alt=""
                width={56}
                height={56}
                className="rounded-full"
              />
              <div className="font-semibold ml-4 group-hover:text-blue-400 group-hover:underline">
                pinkpig
              </div>
            </Link>
          </div>
        )}
        {/* <FeedPagination /> */}
      </div>
    </div>
  );
}
