import { Post } from "@/types";
import { CardVertical } from "./post-card-2";
import { Skeleton } from "./ui/skeleton";

export const FeedContent = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="mb-[66px] flex flex-col gap-4">
      {/* <CardVertical /> */}
      {posts.map((post) => (
        <div className="px-2 mb-6 md:mb-0" key={post.id}>
          <CardVertical post={post} />
        </div>
      ))}
    </div>
  );
};
FeedContent.Skeleton = () => {
  return (
    <div className="flex flex-col gap-4 mb-4">
      <Skeleton className="h-[18px] w-[30%]" />
      <Skeleton className="h-[197px] w-full" />
      <Skeleton className="h-[18px] w-[70%]" />
      <Skeleton className="h-3 w-full" />
      <Skeleton className="h-3 w-full" />
    </div>
  );
};
