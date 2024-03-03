import { FeedTabs } from "./feed-tabs";
import { FeedContent } from "./feed-content";
import { FeedPagination } from "./feed-pagination";
import { Post } from "@/types";

export const Feed = ({ sort, posts }: { sort: string; posts: Post[] }) => {
  return (
    <div id="feed">
      <FeedTabs sort={sort} />
      <FeedContent posts={posts} />
    </div>
  );
};
