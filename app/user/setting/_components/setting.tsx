"use client";
import { useState } from "react";
import { Stickybar } from "./sticky-bar";
import dynamic from "next/dynamic";
import { AccountSetting } from "./account-setting";
import { PaginatedReponse, Post } from "@/types";

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
export const Setting = ({ posts }: { posts: PaginatedReponse<Post> }) => {
  const [tab, setTab] = useState(1);
  return (
    <>
      <div className="min-h-[68vh]">
        <div className="md:w-[45rem] mx-auto w-full relative py-6 px-4">
          <Stickybar changeTab={setTab} tab={tab} />
          {tab === 1 && <AccountSetting />}
          {tab === 2 && <SeriesSetting posts={posts} />}
          {tab === 3 && <BlockedUserSetting />}
          {tab === 4 && <ChangePassword />}
        </div>
      </div>
    </>
  );
};
