import { Metadata } from "next";
import { Setting } from "./_components/setting";
import { getPosts, getSingleSeries } from "@/lib/queries";
import { PaginatedReponse, Post } from "@/types";

export const metadata: Metadata = {
  title: "Cài đặt người dùng",
};
export default async function SettingPage({
  params: { username },
}: {
  params: { username: string };
}) {
  const [postsRs] = await Promise.all([
    getPosts({
      username,
    }),
  ]);
  const [postsData]: [PaginatedReponse<Post>] = await Promise.all([
    postsRs.json(),
  ]);
  return <Setting posts={postsData} />;
}
