import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="container max-sm:p-3">{children}</div>
    </main>
  );
}
