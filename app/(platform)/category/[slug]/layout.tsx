interface CategoryLayoutProps {
  children: React.ReactNode;
}
export default function CategoryLayout({ children }: CategoryLayoutProps) {
  return (
    <div className="w-full pb-8">
      {/* <Cover /> */}
      {/* <Container className="lg:grid lg:grid-cols-3 gap-14"> */}
      {children}

      {/* </Container> */}
    </div>
  );
}
