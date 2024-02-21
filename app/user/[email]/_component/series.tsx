import { Button } from "@/components/ui/button";
import { SerieCard } from "./series-card";
import { NewSerieBtn } from "./new-serie-btn";
import { PlusIcon } from "@radix-ui/react-icons";
import { Skeleton } from "@/components/ui/skeleton";

export const Series = async () => {
  return (
    <>
      <div className="flex mb-4 w-full">
        <NewSerieBtn>
          <Button variant={"primary"} className="rounded px-3 ml-auto">
            <PlusIcon className="mr-2" />
            Tạo series
          </Button>
        </NewSerieBtn>
      </div>
      <div className="grid gap-y-4 md:grid-cols-3 gap-2 md:gap-4">
        <SerieCard />
        <SerieCard />
        <SerieCard />
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
