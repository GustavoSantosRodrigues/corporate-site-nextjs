"use client";

import Link from "next/link";

type Props = {
  title: string;
  href: string;
};

export default function ButtonOutlinePurple({ title, href }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full border border-purplePaths-100 px-8 py-4 text-lg font-medium text-purplePaths-100 transition-all duration-300 hover:bg-purplePaths-100 hover:text-white hover:scale-105";

  return (
    <Link href={href} className={base}>
      {title}
    </Link>
  );
}