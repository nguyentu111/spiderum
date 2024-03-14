"use client";
import { FeedTabs } from "./feed-tabs";
import { FeedContent } from "./feed-content";
import { FeedPagination } from "./feed-pagination";
import { FeedSort, PaginatedReponse, Post } from "@/types";
import { useAuth } from "@/hooks/use-auth";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { axiosClient } from "@/lib/fetcher";

export const Feed = ({
  postsPaginated,
}: {
  postsPaginated: PaginatedReponse<Post>;
}) => {
  const { session } = useAuth();
  const [sort, setSort] = useState<FeedSort>("hot");
  const page_idx = useSearchParams().get("page_idx");
  const { data } = useQuery<{ data: PaginatedReponse<Post> }>({
    queryKey: ["posts", sort, page_idx, session.data?.user.token],
    queryFn: () =>
      axiosClient.get(`/new-feed?sort=${sort}&per_page=5&page=${page_idx}`, {
        headers: {
          Authorization: "Bearer " + session.data?.user.token,
        },
      }),
    refetchOnMount: true,
    initialData: () => {
      if (sort === "hot")
        return {
          data: postsPaginated,
        };
    },
  });
  useEffect(() => {
    history.pushState({}, "", `?sort=${sort}&page_idx=${page_idx}`);
  }, [sort, page_idx]);
  return (
    <div id="feed">
      <FeedTabs sort={sort} setSort={setSort} />
      {data ? (
        <>
          {sort === "follow" && data.data.data.data.length === 0 && (
            <p className="">
              Bạn chưa theo dõi ai cả, hãy theo dõi để cập nhật những bài viết
              mới nhất từ những người bạn theo dõi
            </p>
          )}
          <FeedContent posts={data.data.data.data} />

          {sort === "follow" && data.data.data.data.length === 0 ? null : (
            <FeedPagination paginationData={data.data.data} />
          )}
        </>
      ) : (
        <>
          <FeedContent.Skeleton />
          <FeedContent.Skeleton />
          <FeedContent.Skeleton />
          <FeedContent.Skeleton />
          <FeedContent.Skeleton />
        </>
      )}
    </div>
  );
};
