"use client";
import { FeedContent } from "@/components/feed-content";
import { FeedPagination } from "@/components/feed-pagination";
import { FeedHeader } from "./feed-header";
import { FeedSort, PaginatedReponse, Post } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { axiosClient } from "@/lib/fetcher";
import { useAuth } from "@/hooks/use-auth";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const FeedCurrentPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-end mb-6">
      <small>
        <em className="text-gray-500">{children}</em>
      </small>
    </div>
  );
};
export const Feed = ({
  slug,
  paginatedPosts,
}: {
  slug: string;
  paginatedPosts: PaginatedReponse<Post>;
}) => {
  const { session } = useAuth();
  const [sort, setSort] = useState<FeedSort>("hot");
  const page_idx = useSearchParams().get("page_idx");
  const { data } = useQuery({
    queryKey: ["category", slug, sort],
    queryFn: () =>
      axiosClient.get(
        `/new-feed?sort=${sort}&per_page=5&page=${page_idx}&category=${slug}`,
        {
          headers: {
            Authorization: "Bearer " + session.data?.user.token,
          },
        }
      ),
    initialData: {
      data: paginatedPosts,
    } as any,
    refetchOnMount: true,
  });
  useEffect(() => {
    history.pushState(
      {},
      "",
      `/category/${slug}?sort=${sort}&page_idx=${page_idx}`
    );
  }, [sort, page_idx, slug]);
  return (
    <div className="" id="feed">
      <FeedHeader slug={slug} setSort={setSort} sort={sort} />
      {data && (
        <>
          <FeedCurrentPage>Trang :1 / 601 </FeedCurrentPage>
          <FeedContent posts={data.data.data.data} />
          <FeedPagination paginationData={data.data.data} />
        </>
      )}
    </div>
  );
};
