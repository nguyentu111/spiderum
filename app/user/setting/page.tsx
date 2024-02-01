import { Metadata } from "next";
import { Setting } from "./_components/setting";

export const metadata: Metadata = {
  title: "Cài đặt người dùng",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    siteName: "Spiderum",
    url: process.env.NEXT_PUBLIC_APP_URL,
    description:
      "Nền tảng chia sẻ - thảo luận dành cho người Việt. Nơi tập trung những nội dung thú vị và hữu ích nhất do người dùng đóng góp và bình chọn.",
    images: {
      width: 1080,
      url: process.env.NEXT_PUBLIC_APP_URL + "/assets/spiderum-og.png",
    },
    title:
      "Spiderum | Mạng Xã Hội Chia Sẻ Quan Điểm - Kiến Thức Hàng Đầu Việt Nam",
  },
};
export default function SettingPage() {
  return <Setting />;
}
