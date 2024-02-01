import { Header } from "@/components/patials/Header";

interface NewPostLayoutProps {
  children: React.ReactNode;
}
export default function NewPostLayout({ children }: NewPostLayoutProps) {
  return (
    <>
      <Header fixed />
      {children}
    </>
  );
}
