import { Metadata } from "next";
import { ForgotPasswordForm } from "./_components/forgot-password-form";

export const metadata: Metadata = {
  title: "Lấy lại mật khẩu",
};
export const dynamic = "force-static";

export default function ForgotPassword() {
  return <ForgotPasswordForm />;
}
