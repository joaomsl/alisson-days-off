import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant: "primary" | "secondary" | "dark";
}

const variantClasses = {
  primary: "bg-amber-500/90",
  secondary: "bg-green-400",
  dark: "bg-zinc-900 text-gray-100",
};

export default function Badge({ children, variant }: BadgeProps) {
  return (
    <span
      className={`leading-none rounded-full text-sm grid place-items-center font-semibold w-6 aspect-square ${variantClasses[variant]}`}
    >
      {children}
    </span>
  );
}
