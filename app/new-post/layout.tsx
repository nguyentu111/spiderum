import { auth } from "@/auth";
import { Header } from "@/components/patials/header";
import { Metadata } from "next";
interface NewPostLayoutProps {
  children: React.ReactNode;
}
export const metadata: Metadata = {
  title: "Viết bài mới",
};

export default async function NewPostLayout({ children }: NewPostLayoutProps) {
  const session = await auth();
  return (
    <>
      <Header fixed user={session?.user} />
      {children}
    </>
  );
}
