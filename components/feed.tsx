import { FeedTabs } from "./feed-tabs";
import { FeedContent } from "./feed-content";
import { FeedPagination } from "./feed-pagination";

export const Feed = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  return (
    <div id="feed">
      <FeedTabs searchParams={searchParams} />
      <FeedContent searchParams={searchParams} />
    </div>
  );
};
