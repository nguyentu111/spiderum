"use client";
import React from "react";

function ClientOnly({ children, ...delegated }: { children: React.ReactNode }) {
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    if (typeof window !== undefined) setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return <div {...delegated}>{children}</div>;
}
export { ClientOnly };
