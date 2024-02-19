import { Metadata } from "next";
import { Setting } from "./_components/setting";

export const metadata: Metadata = {
  title: "Cài đặt người dùng",
};
export default function SettingPage() {
  return <Setting />;
}
