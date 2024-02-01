import { NewSerieBtn } from "../../[email]/_component/new-serie-btn";

export const SeriesSetting = () => {
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
          <NewSerieBtn>
            <div className="mt-2 flex justify-center rounded-lg border-2 border-gray-300 p-4 border-dashed mb-2 hover:bg-gray-100 cursor-pointer ng-star-inserted">
              Thêm Series mới
            </div>
          </NewSerieBtn>
        </div>
      </div>
    </div>
  );
};
