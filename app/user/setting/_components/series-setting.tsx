import { PaginatedReponse, Post, Series } from "@/types";
import { AddOrUpdateSeries } from "../../[username]/_component/add-or-update-series";

export const SeriesSetting = ({
  posts,
  series,
}: {
  posts: PaginatedReponse<Post>;
  series: Series[];
}) => {
  return (
    <div className="p-4">
      <label className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2">
        Danh sách Series
      </label>
      <div>
        <div className="py-2.5 px-1.5 text-sm text-center text-[#aaa] border">
          Bạn chưa tạo Series nào
        </div>

        <div>
          <AddOrUpdateSeries posts={posts.data.data}>
            <div className="mt-2 flex justify-center rounded-lg border-2 border-gray-300 p-4 border-dashed mb-2 hover:bg-gray-100 cursor-pointer ng-star-inserted">
              Thêm Series mới
            </div>
          </AddOrUpdateSeries>
        </div>
      </div>
    </div>
  );
};
