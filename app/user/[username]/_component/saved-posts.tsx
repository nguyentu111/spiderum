import { auth } from "@/auth";
import { CardVertical } from "@/components/post-card-2";
import { getSavedPosts } from "@/lib/queries";
import { Post } from "@/types";
import { redirect } from "next/navigation";

export const SavedPosts = async ({ username }: { username: string }) => {
  const session = await auth();
  if (!session?.user) redirect("/login");
  const postsRs = await getSavedPosts(session.user.token);
  const posts = await postsRs.json();
  console.log(posts);
  return (
    <>
      {/* <div className="mt-2 text-center text-18">
      Không có gì để xem ở đây cả :'(
    </div> */}
      <div className="flex flex-col gap-6">
        {posts?.data.map((p: Post) => (
          <div>{p.name}</div>
        ))}
        {/* <CardVertical />
        <CardVertical />
        <CardVertical /> */}
      </div>
    </>
  );
};
