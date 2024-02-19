import { Container } from "@/components/container";
import { Sidebar } from "./_components/side-bar";
import { Cover } from "./_components/cover";

interface CategoryLayoutProps {
  children: React.ReactNode;
}
export default function CategoryLayout({ children }: CategoryLayoutProps) {
  return (
    <div className="w-full pb-8">
      <Cover />
      <Container className="lg:grid lg:grid-cols-3 gap-14">
        {children}
        <Sidebar className="hidden lg:block" />
      </Container>
    </div>
  );
}
