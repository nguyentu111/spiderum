"use client";
import { Button } from "@/components/ui/button";
import { CommentForm } from "./comment-form";
import { CommentNode } from "./comment-node";
import { CommentWithUserInfo, Post } from "@/types";
import { useState } from "react";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { getComment } from "@/lib/queries";
import { useSession } from "next-auth/react";
import { Loader } from "lucide-react";
import { cn } from "@/lib/utils";

export const Comments = ({ post }: { post: Post }) => {
  const [order, setOder] = useState<"latest" | "hottest">("latest");
  const { data: session } = useSession();
  const {
    fetchNextPage: fetchHottest,
    isFetchingNextPage: isFetchingHottest,
    ...hottestResult
  } = useInfiniteQuery({
    queryKey: ["comments", post.id, "hottest"],
    queryFn: ({ pageParam }) =>
      getComment({
        data: { order: "hottest", post_id: post.id },
        token: session?.user.token,
        page: pageParam,
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.data.from + 1;
    },
    initialPageParam: 0,
  });
  const {
    fetchNextPage: fetchLatest,
    isFetchingNextPage: isFetchingLatest,
    ...latestResult
  } = useInfiniteQuery({
    queryKey: ["comments", post.id, "latest"],
    queryFn: ({ pageParam }) =>
      getComment({
        data: { order: "latest", post_id: post.id },
        token: session?.user.token,
        page: pageParam,
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.data.from + 1;
    },
    initialPageParam: 1,
  });
  const hottestComments = hottestResult?.data?.pages.reduce(
    (prev: any[], curr) => [...prev, ...curr.data.data],
    []
  ) as CommentWithUserInfo[];
  const latestComments = latestResult?.data?.pages.reduce(
    (prev: any[], curr) => [...prev, ...curr.data.data],
    []
  ) as CommentWithUserInfo[];
  return (
    <div
      id="comments"
      className="md:p-10 md:pb-0 px-6 pt-6  my-6 mx-auto border border-[var(--common-border-color)] rounded-[var(--border-radius)]"
      style={{
        boxShadow:
          "0 10px 15px -3px rgba(var(--blue-500),.05),0 4px 6px -2px rgba(var(--blue-500),.025)!important",
      }}
    >
      <CommentForm post={post} />
      <div className="flex justify-end mt-4 mb-6">
        <ul className="flex items-center">
          <li>
            <Button
              variant={"link"}
              className={cn("ml-3", order === "hottest" && "text-blue-500 ")}
              onClick={() => setOder("hottest")}
            >
              Hot nhất
            </Button>
          </li>
          <li>
            <Button
              variant={"link"}
              className={cn("ml-3", order === "latest" && "text-blue-500 ")}
              onClick={() => setOder("latest")}
            >
              Mới nhất
            </Button>
          </li>
        </ul>
      </div>
      <div>
        {order === "latest" &&
          latestComments?.map((comment) => (
            <CommentNode
              data={comment}
              post={post}
              key={`${comment.id}.${comment.childrens?.length}`}
            />
          ))}
        {order === "hottest" &&
          hottestComments?.map((comment) => (
            <CommentNode
              data={comment}
              post={post}
              key={`${comment.id}.${comment.childrens?.length}`}
            />
          ))}
      </div>
      {order === "hottest" &&
        !!hottestResult.data?.pages.at(-1)?.data.next_page_url && (
          <Button
            variant={"ghost"}
            className="w-full py-2 font-bold hover:text-blue-500 border-t border-[rgb(var(--border)]"
            onClick={() => fetchHottest()}
          >
            {hottestResult.isFetching && (
              <Loader size={20} className="animate-spin mr-2" />
            )}
            Tải thêm bình luận
          </Button>
        )}
      {order === "latest" &&
        !!latestResult.data?.pages.at(-1)?.data.next_page_url && (
          <Button
            variant={"ghost"}
            className="w-full py-2 font-bold hover:text-blue-500 border-t border-[rgb(var(--border)]"
            onClick={() => fetchLatest()}
          >
            {latestResult.isFetching && (
              <Loader size={20} className="animate-spin mr-2" />
            )}
            Tải thêm bình luận
          </Button>
        )}
    </div>
  );
};
