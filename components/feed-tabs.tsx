"use client";
import { redirect, useRouter } from "next/navigation";
import { feedsort } from "@/constants/feed";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import { Dispatch } from "react";
import { SetStateAction } from "jotai";
import { FeedSort } from "@/types";
export const FeedTabs = ({
  sort,
  setSort,
}: {
  sort: string;
  setSort: Dispatch<SetStateAction<FeedSort>>;
}) => {
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
            onClick={() => setSort(f.value)}
          >
            {f.label}
          </button>
        );
      })}
    </div>
  );
};
