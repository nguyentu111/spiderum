import { auth } from "@/auth";
import { fetcher } from "@/lib/fetcher";
import { formatTimeToDistant } from "@/lib/utils";
import { Draft } from "@/types";

export const Drafts = async ({ username }: { username: string }) => {
  const session = await auth();
  const draftsRs = await fetcher("/drafts", {
    headers: {
      Authorization: "Bearer " + session?.user.token,
    },
  });
  const drafts = (await draftsRs.json()) as { data: Draft[] };
  return (
    <div className="border rounded-md">
      {drafts.data.map((d: Draft) => (
        <div className="mb-4 p-4 border-b">
          <p className="font-bold text-sm">{d.name}</p>
          <p className="text-xs text-gray-400">
            {formatTimeToDistant(d.updated_at)}
          </p>
        </div>
      ))}
    </div>
  );
};
