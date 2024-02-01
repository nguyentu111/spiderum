import { Skeleton } from "@/components/ui/skeleton";

export const Posts = () => {
  return (
    <div className="mt-2 text-center text-18">
      Không có gì để xem ở đây cả :&apos;(
    </div>
  );
};
Posts.displayName = "Posts";
Posts.Skeleton = () => {
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
