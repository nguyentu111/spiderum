import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { LoginForm } from "./_components/login-form";

export const metadata: Metadata = {
  title: "Đăng nhập",
};
export const dynamic = "force-static";
export default function login() {
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
      <LoginForm />
      <div className="w-full">
        <p className="my-4 text-sm">
          <Link
            href="/forgot-password"
            className="hover:underline text-[#1d8acb]"
          >
            Quên mật khẩu ?
          </Link>
        </p>
        <p className="my-4 text-sm">
          Không có tài khoản?{" "}
          <Link href="/register" className="hover:underline text-[#1d8acb]">
            Đăng kí ngay ?
          </Link>
        </p>
      </div>
    </div>
  );
}
