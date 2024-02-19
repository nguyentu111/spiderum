import { BackToTop } from "@/components/backtotop";
import { Header } from "@/components/patials/header";
import { Footer } from "@/components/patials/footer";

interface NewPostLayoutProps {
  children: React.ReactNode;
}
export default function NewPostLayout({ children }: NewPostLayoutProps) {
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
