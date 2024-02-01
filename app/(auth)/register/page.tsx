import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Đăng kí",
};
export default function register() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-6 w-full md:w-[350px] mx-auto">
      <Link href="/" aria-label="Trang chủ">
        <Image
          src="/assets/spiderum-logo.png"
          alt="logo"
          width={87}
          height={80}
          className="mb-5"
          priority
        />
      </Link>
      <form className="flex flex-col items-center justify-center w-full">
        <div>
          <label htmlFor="email" className="mb-1 text-sm">
            Đăng ký bằng email
          </label>
          <input
            className="outline-none border w-full h-10 px-2 py-1.5"
            id="email"
            name="email"
            type="email"
            placeholder="email@example.com"
            autoFocus
            required
          />
        </div>
        <div className="flex mt-4">
          <span className="text-sm">
            Thư xác nhận sẽ được gửi vào hòm thư của bạn
          </span>
          <input
            type="submit"
            value={"Gửi"}
            id="submit-btn"
            className="mt-4 px-4 text-sm py-1 text-white bg-[#2fb5fa] hover:bg-[#1d98d8] cursor-pointer"
          />
        </div>
      </form>
      <div className="w-full">
        <p className="my-4 text-sm">
          Đã có tài khoản?{" "}
          <Link href="/login" className="hover:underline text-[#1d8acb]">
            Đăng nhập
          </Link>
        </p>
      </div>
    </div>
  );
}
