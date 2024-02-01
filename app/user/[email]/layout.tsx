import { BackToTop } from "@/components/backtotop";
import { Header } from "@/components/patials/Header";
import { Footer } from "@/components/patials/footer";

interface NewPostLayoutProps {
  children: React.ReactNode;
}
export default function NewPostLayout({ children }: NewPostLayoutProps) {
  return (
    <>
      <Header hasShadow hasEmptySection hasSearch hasMessage hasNewPostBtn />
      {children}
      <Footer />
      <BackToTop />
    </>
  );
}
