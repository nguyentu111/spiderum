interface SidebarProps {
  children?: React.ReactNode;
}
export const Sidebar = ({ children }: SidebarProps) => {
  return (
    <div className="px-4 mb-6 border-[1px] border-[var(--common-border-color)] rounded">
      {children}
    </div>
  );
};
