import { auth } from "@/auth";
import { CardVertical } from "@/components/post-card-2";
import { getSingleSeries, getUserPosts } from "@/lib/queries";
import { PaginatedReponse, Post, Series } from "@/types";
import { notFound } from "next/navigation";
import React from "react";
import { SeriesSetting } from "./_components/series-setting";

type Props = {
  params: { username: string; slug: string };
};

const page = async ({ params: { username, slug } }: Props) => {
  const session = await auth();
  const [postsRs, seriesRs] = await Promise.all([
    getUserPosts({
      username,
    }),
    getSingleSeries(slug),
  ]);
  if (seriesRs.status === 404 || postsRs.status === 404) return notFound();
  const [postsData, seriesData]: [PaginatedReponse<Post>, { data: Series }] =
    await Promise.all([postsRs.json(), seriesRs.json()]);
  return (
    <div>
      <div className="flex justify-between mb-4">
        <h1 className="font-bold text-2xl">{seriesData.data.name}</h1>
        <SeriesSetting series={seriesData.data} posts={postsData.data.data} />
      </div>
      {seriesData.data.posts.length == 0 && (
        <div className="">Serie chưa có bài viết</div>
      )}
      <div className="flex flex-col gap-4">
        {seriesData.data.posts.map((p) => (
          <CardVertical post={p} key={p.id} />
        ))}
      </div>
    </div>
  );
};

export default page;
