import { auth } from "@/auth";
import { CardVertical } from "@/components/post-card-1";
import { getPosts } from "@/lib/queries";
import { PaginatedReponse, Post } from "@/types";
import { unstable_noStore as noStore } from "next/cache";

export const Posts = async ({ username }: { username: string }) => {
  noStore();
  const session = await auth();
  const rs = await getPosts({ username, token: session?.user.token });
  const userPosts = (await rs.json()) as PaginatedReponse<Post>;
  const posts = userPosts.data.data;
  if (userPosts.data.data.length === 0)
    return (
      <div className="mt-2 text-center text-18">
        Không có gì để xem ở đây cả :&apos;(
      </div>
    );
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
      {posts.map((p) => (
        <CardVertical post={p} key={p.id} />
      ))}
    </div>
  );
};
Posts.displayName = "Posts";
