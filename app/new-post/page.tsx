import { getCategories } from "@/lib/queries";
import { NewPost } from "./_components/new-post";
import { auth } from "@/auth";

export const dynamic = "force-static";

export default async function page() {
  const session = await auth();
  const [rs] = await Promise.all([
    getCategories(),
    getSeries(session?.user.token!),
  ]);
  const categories = rs.data;
  return <NewPost categories={categories} />;
}
