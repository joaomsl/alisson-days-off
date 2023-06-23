import { ReactNode } from "react";

interface ColumnProps {
  children?: ReactNode;
  className?: string;
}

export default function Column({ children, className }: ColumnProps) {
  return (
    <td className={`border-x-gray-950 border-x ${className}`}>{children}</td>
  );
}
