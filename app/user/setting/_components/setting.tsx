"use client";
import { Stickybar } from "./sticky-bar";
import dynamic from "next/dynamic";
import { AccountSetting } from "./account-setting";
import { PaginatedReponse, Post, Series } from "@/types";
import { useSearchParams } from "next/navigation";

const SeriesSetting = dynamic(
  () => import("./series-setting").then((m) => m.SeriesSetting),
  {
    ssr: false,
  }
);
const BlockedUserSetting = dynamic(
  () => import("./blocked-users-setting").then((m) => m.BlockedUserSetting),
  {
    ssr: false,
  }
);
const ChangePassword = dynamic(
  () => import("./change-password").then((m) => m.ChangePassword),
  {
    ssr: false,
  }
);
export const Setting = ({
  posts,
  series,
}: {
  posts: PaginatedReponse<Post>;
  series: Series[];
}) => {
  const tab = useSearchParams().get("tab");
  return (
    <>
      <div className="min-h-[68vh]">
        <div className="md:w-[45rem] mx-auto w-full relative py-6 px-4">
          <Stickybar />
          {tab === "account" && <AccountSetting />}
          {tab === "series" && <SeriesSetting posts={posts} series={series} />}
          {tab === "banned" && <BlockedUserSetting />}
          {tab === "change-password" && <ChangePassword />}
        </div>
      </div>
    </>
  );
};
