"use client";
import { redirect, useRouter } from "next/navigation";
import { feedsort } from "@/constants/feed";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
export const FeedTabs = ({ sort }: { sort: string }) => {
  const router = useRouter();
  const session = useSession();
  return (
    <div className="mb-6 w-full overflow-x-auto border-b-[var(--filter-border-color)] border-b-[1px] flex items-center">
      {feedsort.map((f) => {
        if (f.value === "follow" && !session.data?.user) return null;
        return (
          <button
            key={f.value}
            className={cn(
              "uppercase md:mr-5 px-2 py-2 text-[14px] font-medium whitespace-nowrap",
              f.value === sort && "border-b-[3px] border-[#3398d4]"
            )}
            onClick={() =>
              router.push(`/?sort=${f.value}&page_idx=1`, { scroll: false })
            }
          >
            {f.label}
          </button>
        );
      })}
    </div>
  );
};
