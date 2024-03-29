import { auth } from "@/auth";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";
import { Posts } from "./_component/posts";
import { SavedPosts } from "./_component/saved-posts";
import { Series } from "./_component/series";
import { Drafts } from "./_component/drafts";

interface UserPageProps {
  params: { username: string };
  searchParams: { [key: string]: string | string[] | undefined };
}
export default async function UserPage({
  params: { username },
  searchParams,
}: UserPageProps) {
  const tab = searchParams.tab;
  const session = await auth();
  const user = session?.user;
  return (
    <>
      {!tab && (
        <Suspense fallback={<CSkeleton />}>
          <Posts username={username} />
        </Suspense>
      )}
      {tab == "series" && (
        <Suspense fallback={<CSkeleton />}>
          <Series
            username={username}
            isLoggedUser={user?.username === username}
          />
        </Suspense>
      )}
      {tab == "savedPosts" && (
        <Suspense fallback={<CSkeleton />}>
          <SavedPosts username={username} />
        </Suspense>
      )}
      {tab == "comments" && <div>comments</div>}
      {tab == "followers" && <div>followers</div>}
      {tab == "following" && <div>following</div>}
      {tab == "draft" && (
        <Suspense fallback={<CSkeleton />}>
          <Drafts username={username} />
        </Suspense>
      )}
    </>
  );
}
const CSkeleton = () => {
  return (
    <div className="">
      <div className="flex gap-4 mb-6">
        <Skeleton className="rounded-lg w-20 h-20 flex-shrink-0" />
        <div className="flex flex-col gap-2 w-full">
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-full h-4" />
        </div>
      </div>
      <div className="flex gap-4 mb-6">
        <Skeleton className="rounded-lg w-20 h-20 flex-shrink-0" />
        <div className="flex flex-col gap-2 w-full">
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-full h-4" />
        </div>
      </div>
      <div className="flex gap-4 mb-6">
        <Skeleton className="rounded-lg w-20 h-20 flex-shrink-0" />
        <div className="flex flex-col gap-2 w-full">
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-full h-4" />
        </div>
      </div>
      <div className="flex gap-4 mb-6">
        <Skeleton className="rounded-lg w-20 h-20 flex-shrink-0" />
        <div className="flex flex-col gap-2 w-full">
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-full h-4" />
        </div>
      </div>
      <div className="flex gap-4 mb-6">
        <Skeleton className="rounded-lg w-20 h-20 flex-shrink-0" />
        <div className="flex flex-col gap-2 w-full">
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-full h-4" />
          <Skeleton className="w-full h-4" />
        </div>
      </div>
    </div>
  );
};
