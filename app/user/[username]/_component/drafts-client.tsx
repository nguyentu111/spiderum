"use client";
import { Button } from "@/components/ui/button";
import { cn, getDayFromTimestamp } from "@/lib/utils";
import { Draft } from "@/types";
import { PenToolIcon } from "lucide-react";
import Link from "next/link";
import { DeleteDraftBtn } from "./delete-draft-btn";
import { useReducer } from "react";
type Props = {
  drafts: Draft[];
};

export const DraftsClient = ({ drafts }: Props) => {
  const [optimisticDrafts, dispatch] = useReducer(
    (state: Draft[], action: { payload: string }) => {
      return [...state.filter((d) => d.id !== action.payload)];
    },
    drafts
  );
  return (
    <div>
      {optimisticDrafts.length > 0 ? (
        <div className="border rounded-md">
          {optimisticDrafts.map((d: Draft, i) => (
            <div
              key={d.id}
              className={cn(
                "p-4 ",
                i !== optimisticDrafts.length && "border-b"
              )}
            >
              <Link
                href={`/new-post?draft_id=${d.id}`}
                className="font-bold text-sm mb-2"
              >
                {d.name}
              </Link>
              <div className="flex flex-col justify-between md:flex-row mt-2 md:mt-0">
                <p className="text-xs text-gray-400">
                  {getDayFromTimestamp(d.updated_at)}
                </p>
                <div className="flex ml-auto">
                  <Button
                    variant={"ghost"}
                    className="text-gray-600 hover:text-white hover:bg-gray-500 px-2 !text-sm py-1 !h-auto"
                    asChild
                  >
                    <Link href={`/new-post?draft_id=${d.id}`}>
                      <PenToolIcon className="w-4 h-4 rotate-[270deg] mr-3 " />
                      Tiếp tục
                    </Link>
                  </Button>
                  <DeleteDraftBtn
                    id={d.id}
                    onDelete={() => dispatch({ payload: d.id })}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="font-bold text-center"> Không có gì để xem ở đây :(</p>
      )}
    </div>
  );
};
