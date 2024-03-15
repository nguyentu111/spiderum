import { auth } from "@/auth";
import { fetcher } from "@/lib/fetcher";
import { Draft } from "@/types";
import { DraftsClient } from "./drafts-client";

export const dynamic = "force-dynamic";
export const Drafts = async ({ username }: { username: string }) => {
  const session = await auth();
  const draftsRs = await fetcher("/drafts", {
    headers: {
      Authorization: "Bearer " + session?.user.token,
    },
    next: { revalidate: 0 },
  });
  const drafts = (await draftsRs.json()) as { data: Draft[] };
  return <DraftsClient drafts={drafts.data} />;
};
