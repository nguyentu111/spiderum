import { Metadata } from "next";
import { ResetPasswordForm } from "./_components/reset-password-form";
import { axiosCient } from "@/lib/fetcher";
import { AxiosError } from "axios";

export const metadata: Metadata = {
  title: "Đặt lại mật khẩu",
};
export const dynamic = "force-static";

export default async function ResetPassword({
  searchParams: { token },
}: {
  searchParams: { token: string | undefined };
}) {
  let errorMessage;
  let email;
  try {
    const rs = await axiosCient.post("/auth/users/get-email-by-token", {
      token,
    });
    email = rs.data.email;
  } catch (error) {
    if (error instanceof AxiosError) {
      errorMessage = error.response?.data.message;
    }
    return (
      <div className="flex flex-col items-center justify-center h-screen px-6 w-full md:w-[400px] mx-auto">
        <p>{errorMessage ?? "Server error!"}</p>
      </div>
    );
  }
  return <ResetPasswordForm email={email} />;
}
