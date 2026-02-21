"use client";

import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

type Props = {
  children: ReactNode;
  href?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function ButtonOutlinePurple({
  children,
  href,
  ...props
}: Props) {
  const base =
    "inline-flex transition-transform duration-300 hover:scale-105 items-center justify-center rounded-full border border-white/80 px-8 py-4 text-lg font-medium text-white transition-all duration-300 hover:bg-white hover:text-purple-700";

  if (href) {
    return (
      <Link href={href} className={base}>
        {children}
      </Link>
    );
  }

  return (
    <button className={base} {...props}>
      {children}
    </button>
  );
}