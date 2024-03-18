import { Metadata } from "next";
import { Setting } from "./_components/setting";
import { getPosts, getSeries } from "@/lib/queries";
import { PaginatedReponse, Post } from "@/types";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Cài đặt người dùng",
};
export const dynamic = "force-dynamic";
export default async function SettingPage({
  params: { username },
  searchParams: { tab },
}: {
  params: { username: string };
  searchParams: { tab: string };
}) {
  const session = await auth();
  const [postsRs, series] = await Promise.all([
    getPosts({
      username,
    }),
    getSeries(session?.user.username),
  ]);
  const [postsData]: [PaginatedReponse<Post>] = await Promise.all([
    postsRs.json(),
  ]);
  if (!tab) redirect("/user/setting?tab=account");
  return <Setting posts={postsData} series={series} />;
}
