import { Post as TPost } from "@/types";
import { notFound } from "next/navigation";
import { Post } from "./_components/post";
import { fetcher } from "@/lib/fetcher";
import { formatTimeToDistant } from "@/lib/utils";
import { auth } from "@/auth";
interface PostPageProps {
  params: {
    slug: string;
  };
}
export async function generateMetadata({ params }: PostPageProps) {
  const { slug } = params;
  const rs = await fetcher(`/posts/${slug}`);
  if (rs.status === 404) return notFound();
  const data = (await rs.json()) as { data: TPost };

  return {
    title: data.data.name,
  };
}
export async function generateStaticParams() {
  return Promise.resolve([]);
}
export const dynamicParams = true;
export const dynamic = "force-dynamic";
export default async function PostPage({ params }: PostPageProps) {
  const { slug } = params;
  const session = await auth();
  const rs = await fetcher(`/posts/${slug}`, {
    headers: { Authorization: "Bearer " + session?.user.token },
  });
  if (rs.status === 404) return notFound();
  const data = (await rs.json()) as { data: TPost };
  // console.log()
  return (
    <Post
      post={{
        ...data.data,
        created_at: formatTimeToDistant(data.data.created_at),
      }}
    />
  );
}
