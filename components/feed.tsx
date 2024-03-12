import { FeedTabs } from "./feed-tabs";
import { FeedContent } from "./feed-content";
import { FeedPagination } from "./feed-pagination";
import { FeedSort, PaginatedReponse, Post } from "@/types";

export const Feed = async ({
  sort,
  postsPaginated,
}: {
  sort: FeedSort;
  postsPaginated: PaginatedReponse<Post>;
}) => {
  return (
    <div id="feed">
      <FeedTabs sort={sort} />
      <FeedContent posts={postsPaginated.data.data} />
      {sort === "follow" && postsPaginated.data.data.length === 0 && (
        <p className="">
          Bạn chưa theo dõi ai cả, hãy theo dõi để cập nhật những bài viết mới
          nhất từ những người bạn theo dõi
        </p>
      )}
      {sort === "follow" && postsPaginated.data.data.length === 0 ? null : (
        <FeedPagination paginationData={postsPaginated.data} />
      )}
    </div>
  );
};
