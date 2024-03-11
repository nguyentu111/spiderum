import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Series } from "@/types";
import Image from "next/image";
import Link from "next/link";

export const SerieCard = ({
  serie,
  username,
}: {
  serie: Series;
  username: string;
}) => {
  return (
    <div className="border rounded">
      <div className="w-full h-[100px] relative">
        <Image
          src={serie.thumbnail!}
          className="object-cover"
          alt=""
          fill
          sizes="(min-width: 768px) 30vw, 90vw"
        />
      </div>

      <div className="p-4">
        <h3 className="mb-2 font-bold">{serie.name}</h3>
      </div>
      <div className="px-4 pb-4 flex items-center justify-between">
        <span className="text-12 text-[#909399]">
          {serie.posts.length} bài viết
        </span>
        <Button className="rounded " variant={"secondary"} size={"sm"} asChild>
          <Link href={`/user/${username}/series/${serie.slug}`}>Chi tiết</Link>
        </Button>
      </div>
    </div>
  );
};
SerieCard.displayName = "SerieCard";
