import React from "react";
import { Header } from "@/components/patials/header";
import { BackToTop } from "@/components/backtotop";
import { Footer } from "@/components/patials/footer";
import { getCategories } from "@/lib/queries";
import { auth } from "@/auth";

export default async function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const categories = await getCategories();
  const session = await auth();
  return (
    <>
      <Header
        categories={categories.data}
        hasCategories
        hasMessage
        hasNewPostBtn
        hasSearch
        hasSocials
        hasShadow
        user={session?.user}
      />
      {children}
      <Footer />
      <BackToTop />
    </>
  );
}
