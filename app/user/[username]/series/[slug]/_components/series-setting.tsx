import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { AddOrUpdateSeries } from "../../../_component/add-or-update-series";
import { Post, Series } from "@/types";

export const SeriesSetting = ({
  series,
  posts,
}: {
  series: Series;
  posts: Post[];
}) => {
  return (
    <AddOrUpdateSeries posts={posts} series={series}>
      <div className="underline cursor-pointer">Chỉnh sửa series</div>
    </AddOrUpdateSeries>
  );
};
