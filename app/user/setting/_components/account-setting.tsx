import { Camera } from "@/components/icons/Camera";
import { Button } from "@/components/ui/button";

export const AccountSetting = () => {
  return (
    <div>
      <div className="h-40 rounded">
        <form
          method="post"
          className="w-full h-40 relative border rounded  bg-black/50"
        >
          <label className="flex flex-col items-center justify-center group absolute inset-0 cursor-pointer">
            <Camera
              width={40}
              height={40}
              viewBox="0 0 1000 1000"
              className="text-white group-hover:scale-110 transition-all duration-200"
            />
            <div className="text-white">Thay đổi ảnh bìa</div>
            <input className="hidden" type="file" accept="image/*" />
          </label>
        </form>
      </div>
      <div className="p-5">
        <div className="mb-6 justify-between flex flex-wrap">
          <form className="w-32 h-32 rounded-full overflow-hidden relative bg-black/50">
            <label className="cursor-pointer absolute inset-0 flex flex-col items-center justify-center">
              <Camera
                width={40}
                height={40}
                viewBox="0 0 1000 1000"
                className="text-white group-hover:scale-110 transition-all duration-200"
              />
              <input type="file" accept="image/*" className="hidden" />
            </label>
          </form>
          <div className="px-3 mb-6 md:mb-0 w-2/3">
            <textarea
              cols={30}
              rows={10}
              className="h-32 appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white resize-none"
            ></textarea>
            <p className="text-xs italic ng-tns-c106-85 text-gray-800">0/150</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2">
          <div className="px-3">
            <label
              htmlFor="name"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              tên hiển thị
            </label>
            <input
              id="name"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            />
          </div>
          <div className="px-3">
            <label
              htmlFor="name"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Email
            </label>
            <input
              id="name"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            />
          </div>
          <div className="px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Ngày sinh
            </label>
            <div className="flex gap-4">
              <select
                id="day"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              >
                <option>Ngày</option>
                {Array.from({ length: 31 }).map((v, i) => (
                  <option key={i} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <select
                id="month"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              >
                <option>Tháng</option>
                {Array.from({ length: 12 }).map((v, i) => (
                  <option key={i} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <select
                id="year"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              >
                <option>Năm</option>
                {Array.from({ length: 80 }).map((v, i) => (
                  <option key={i} value={i + 194}>
                    {i + 1940}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="px-3">
            <label
              htmlFor="name"
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Giới tính
            </label>
            <div className="flex items-center h-[45px]">
              <input id="male" type="radio" name="sex" className="mr-1" />
              <label htmlFor="male" className="mr-4">
                Nam
              </label>
              <input id="female" type="radio" name="sex" className="mr-1" />
              <label htmlFor="female" className="mr-4">
                Nữ
              </label>
              <input id="other" type="radio" name="sex" className="mr-1" />
              <label htmlFor="other" className="mr-4">
                Khác
              </label>
            </div>
            <div className="flex justify-end items-center gap-4">
              <Button variant={"secondary"}>Hủy</Button>
              <Button variant={"primary"} className="rounded-full">
                Lưu
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
