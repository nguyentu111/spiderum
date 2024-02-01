import { Button } from "@/components/ui/button";

export const ChangePassword = () => {
  return (
    <>
      <div className="px-3 mb-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ng-tns-c93-6">
          Mật khẩu cũ
        </label>
        <input
          id="old-password"
          type="password"
          placeholder="******************"
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        />
      </div>
      <div className="px-3 mb-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ng-tns-c93-6">
          Mật khẩu mới
        </label>
        <input
          id="new-password"
          type="password"
          placeholder="******************"
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        />
        <p className="text-red-500 text-xs italic ng-tns-c93-6 ng-star-inserted">
          Mật khẩu mới không được giống mật khẩu cũ.{" "}
        </p>
      </div>
      <div className="px-3 mb-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 ng-tns-c93-6">
          Nhập lại mật khẩu mới
        </label>
        <input
          id="confirm-new-password"
          type="password"
          placeholder="******************"
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        />
      </div>
      <div className="px-3 mb-3">
        <Button className="w-full" variant={"primary"}>
          Xác nhận
        </Button>
      </div>
    </>
  );
};
