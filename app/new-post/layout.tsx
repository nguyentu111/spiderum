import { Header } from "@/components/patials/header";
import { Metadata } from "next";
interface NewPostLayoutProps {
  children: React.ReactNode;
}
export const metadata: Metadata = {
  title: "Viết bài mới",
};
export default function NewPostLayout({ children }: NewPostLayoutProps) {
  return (
    <>
      <Header fixed />
      {children}
    </>
  );
}
