import { MouseEventHandler, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: MouseEventHandler;
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      className="flex items-center gap-2 bg-gray-100 py-2 px-4 rounded-md shadow-md font-medium hover:bg-opacity-40 transition-colors"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
