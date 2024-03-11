import { Button } from "@/components/ui/button";
import { SerieCard } from "./series-card";
import { AddOrUpdateSeries } from "./add-or-update-series";
import { PlusIcon } from "@radix-ui/react-icons";
import { Skeleton } from "@/components/ui/skeleton";
import { getSeries, getUserPosts } from "@/lib/queries";
import { auth } from "@/auth";
import { notFound } from "next/navigation";
import { fetcher } from "@/lib/fetcher";
import { Series as TSeries } from "@/types";

export const Series = async ({ username }: { username: string }) => {
  // const session = await auth();
  const [postsRs, seriesRs] = await Promise.all([
    getUserPosts({ username }),
    fetcher(`/series?username=${username}`, {
      next: { tags: ["series", username] },
    }),
  ]);
  if (postsRs.status === 404 || seriesRs.status === 404) return notFound();
  const [postsData, seriesData] = await Promise.all([
    postsRs.json(),
    seriesRs.json(),
  ]);
  return (
    <>
      <div className="flex mb-4 w-full">
        <AddOrUpdateSeries posts={postsData.data.data}>
          <Button variant={"primary"} className="rounded px-3 ml-auto">
            <PlusIcon className="mr-2" />
            Tạo series
          </Button>
        </AddOrUpdateSeries>
      </div>
      <div className="grid gap-y-4 md:grid-cols-3 gap-2 md:gap-4">
        {seriesData.data.map((serie: TSeries) => (
          <SerieCard key={serie.id} serie={serie} username={username} />
        ))}
      </div>
    </>
  );
};
Series.Skeleton = () => {
  return (
    <>
      <div className="flex mb-4 w-full">
        <Skeleton className="rounded px-3 ml-auto w-28 h-10" />
      </div>
      <div className="grid gap-y-4 md:grid-cols-3 gap-2 md:gap-4 ">
        <div className="w-full border rounded">
          <Skeleton className="rounded px-3 ml-auto w-full h-[100px]" />
          <div className="h-32 p-4">
            <Skeleton className="w-12 h-6 mb-4 " />
            <div className="flex justify-between items-center">
              <Skeleton className="w-32 h-6" />
              <Skeleton className="w-20 h-10" />
            </div>
          </div>
        </div>
        <div className="w-full border rounded">
          <Skeleton className="rounded px-3 ml-auto w-full h-[100px]" />
          <div className="h-32 p-4">
            <Skeleton className="w-12 h-6 mb-4 " />
            <div className="flex justify-between items-center">
              <Skeleton className="w-32 h-6" />
              <Skeleton className="w-20 h-10" />
            </div>
          </div>
        </div>
        <div className="w-full border rounded">
          <Skeleton className="rounded px-3 ml-auto w-full h-[100px]" />
          <div className="h-32 p-4">
            <Skeleton className="w-12 h-6 mb-4 " />
            <div className="flex justify-between items-center">
              <Skeleton className="w-32 h-6" />
              <Skeleton className="w-20 h-10" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
