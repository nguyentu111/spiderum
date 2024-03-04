import { getCategories, getSeries } from "@/lib/queries";
import { NewPost } from "./_components/new-post";
import { auth } from "@/auth";

export const dynamic = "force-static";

export default async function page() {
  const categoriesResponse = await getCategories();
  return <NewPost categories={categoriesResponse.data} />;
}
