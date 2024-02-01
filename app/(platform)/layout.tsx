import React from "react";
import { Header } from "../../components/patials/Header";
import { BackToTop } from "@/components/backtotop";
import { Footer } from "@/components/patials/footer";

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header
        hasCategories
        hasMessage
        hasNewPostBtn
        hasSearch
        hasSocials
        hasShadow
      />
      {children}
      <Footer />
      <BackToTop />
    </>
  );
}
