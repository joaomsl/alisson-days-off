import { ReactNode } from "react";

interface RowProps {
  children: ReactNode;
  className?: string;
}

export default function Row({ children, className }: RowProps) {
  return (
    <tr className={`border-y-gray-950 border-y ${className}`}>{children}</tr>
  );
}
