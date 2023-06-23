import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="grid place-items-center min-h-screen">
      <div className="container">{children}</div>
    </main>
  );
}
