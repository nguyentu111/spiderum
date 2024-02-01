import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_APP_URL
    ? new URL(process.env.NEXT_PUBLIC_APP_URL)
    : new URL("http://localhost:3000"),
  title: "Spiderum",
  description:
    "Nền tảng chia sẻ - thảo luận dành cho người Việt. Nơi tập trung những nội dung thú vị và hữu ích nhất do người dùng đóng góp và bình chọn.",
  openGraph: {
    type: "website",
    siteName: "Spiderum",
    title:
      "Spiderum | Mạng Xã Hội Chia Sẻ Quan Điểm - Kiến Thức Hàng Đầu Việt Nam",
  },
};
