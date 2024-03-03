import { Metadata } from "next";
import { RegisterForm } from "./_components/register-form";

export const metadata: Metadata = {
  title: "Đăng kí",
};
export const dynamic = "force-static";

export default function register() {
  return <RegisterForm />;
}
