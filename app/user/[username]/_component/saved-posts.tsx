import { auth } from "@/auth";
import { getSavedPostsServer } from "@/lib/queries";
import { SavedPostsClient } from "./save-posts-client";
import { unstable_noStore as noStore } from "next/cache";
export const SavedPosts = async ({ username }: { username: string }) => {
  noStore();
  const session = await auth();
  const rs = await getSavedPostsServer(session?.user.token!);
  const data = await rs.json();
  return (
    <>
      <div className="flex flex-col gap-6">
        {data.data?.length === 0 && (
          <p className="font-bold text-center">Bạn chưa lưu bài viết nào :(</p>
        )}
        <SavedPostsClient posts={data.data} />
      </div>
    </>
  );
};
