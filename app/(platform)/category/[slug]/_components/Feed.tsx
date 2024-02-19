import { FeedContent } from "@/components/feed-content";
import { FeedPagination } from "@/components/feed-pagination";
import { FeedHeader } from "./feed-header";

import React from "react";

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
  searchParams,
}: {
  slug: string;
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  return (
    <div className="" id="feed">
      <FeedHeader slug={slug} searchParams={searchParams} />
      <FeedCurrentPage>Trang :1 / 601 </FeedCurrentPage>
      <FeedContent />
      <FeedPagination searchParams={searchParams} />
    </div>
  );
};
