import { Post } from "@/types";
import { CardVertical } from "./post-card-2";

export const FeedContent = ({ posts }: { posts: Post[] }) => {
  return (
    <div className="mb-[66px]">
      {/* <CardVertical /> */}
      {posts.map((post) => (
        <div className="px-2 mb-6 md:mb-0 " key={post.id}>
          <CardVertical post={post} />
        </div>
      ))}
    </div>
  );
};
