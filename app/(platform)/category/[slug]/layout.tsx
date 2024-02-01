import { Container } from "@/components/container";
import { Cover } from "./_components/Cover";
import { Sidebar } from "./_components/Sidebar";

interface CategoryLayoutProps {
  children: React.ReactNode;
}
export default function CategoryLayout({ children }: CategoryLayoutProps) {
  return (
    <div className="w-full pb-8">
      <Cover />
      <Container className="grid grid-cols-3 gap-14">
        {children}
        <Sidebar />
      </Container>
    </div>
  );
}
