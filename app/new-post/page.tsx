import { getCategories } from "@/lib/queries";
import { NewPost } from "./_components/new-post";

// export const dynamic = "force-static";

export default async function page() {
  const categoriesResponse = await getCategories();
  return <NewPost categories={categoriesResponse.data} />;
}
