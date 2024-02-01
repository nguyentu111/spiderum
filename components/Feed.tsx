import { Container } from "@/components/container";
import { FeedTabs } from "./FeedTabs";
import { FeedContent } from "./FeedContent";
import { FeedPagination } from "./FeedPagination";

export const Feed = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  return (
    <div id="feed">
      <FeedTabs searchParams={searchParams} />
      <FeedContent searchParams={searchParams} />
      <FeedPagination searchParams={searchParams} />
    </div>
  );
};
