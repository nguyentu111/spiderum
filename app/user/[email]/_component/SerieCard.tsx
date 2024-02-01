import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

export const SerieCard = () => {
  return (
    <div className="border rounded">
      <Image
        src="https://images.spiderum.com/sp-thumbnails/defaultthumbnail.png"
        width={300}
        height={100}
        className="w-full h-[100px] object-cover"
        alt=""
      />
      <div className="p-4">
        <h3 className="mb-2 font-bold">asdasd</h3>
      </div>
      <div className="px-4 pb-4 flex items-center justify-between">
        <span className="text-12 text-[#909399]">0 bài viết</span>
        <Button className="rounded " variant={"secondary"} size={"sm"}>
          Chi tiết
        </Button>
      </div>
    </div>
  );
};
SerieCard.displayName = "SerieCard";
SerieCard.Skeleton = () => {
  return (
    <div className="border rounded">
      <Skeleton className="w-full h-[100px]" />
      <div className="p-4">
        <Skeleton className="w-28 h-6" />
      </div>
      <div className="px-4 pb-4 flex items-center justify-between">
        <Skeleton className="w-20 h-4" />
        <Skeleton className="w-20 h-8" />
      </div>
    </div>
  );
};
