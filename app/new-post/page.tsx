import { getCategories, getDraft } from "@/lib/queries";
import { NewPost } from "./_components/new-post";
import { auth } from "@/auth";

// export const dynamic = "force-static";

export default async function page({
  searchParams: { draft_id },
}: {
  searchParams: { draft_id: string };
}) {
  const session = await auth();
  const [categoriesResponse, draftRs] = await Promise.all([
    getCategories(),
    getDraft({
      id: draft_id,
      token: session?.user.token!,
    }),
  ]);
  let draft = null;
  if (draftRs.ok) {
    draft = await draftRs.json();
  }
  return <NewPost categories={categoriesResponse.data} draft={draft?.data} />;
}
