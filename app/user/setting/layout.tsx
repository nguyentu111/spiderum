import { BackToTop } from "@/components/backtotop";
import { Header } from "@/components/patials/header";
import { Footer } from "@/components/patials/footer";
import { auth } from "@/auth";

interface NewPostLayoutProps {
  children: React.ReactNode;
}
export default async function NewPostLayout({ children }: NewPostLayoutProps) {
  const session = await auth();
  return (
    <>
      <Header
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
