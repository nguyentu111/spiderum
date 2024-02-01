"use client";
import { AppProgressBar } from "next-nprogress-bar";

export const ProgressBar = () => {
  return (
    <AppProgressBar
      height="4px"
      color="#2fb5fa"
      options={{ showSpinner: false }}
      shallowRouting
    />
  );
};
