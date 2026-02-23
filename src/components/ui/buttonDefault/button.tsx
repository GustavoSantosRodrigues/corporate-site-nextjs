import Link from "next/link";
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
};

export function ButtonDefault({
  children,
  href,
  className = "",
  onClick,
}: ButtonProps) {
  const baseStyles = `
    relative z-10
    rounded-full bg-purplePaths-100 text-white
    flex items-center justify-center
    font-poppins font-medium
    shadow-lg shadow-black/40
    transition-all duration-500 ease-out
    transform scale-100
    hover:scale-105
    hover:shadow-2xl hover:shadow-purple-500/80
    before:absolute before:inset-0 before:z-[-1]
    before:rounded-full
    before:bg-gradient-to-r
    before:from-purple-500 before:to-purple-700
    before:opacity-0
    before:transition-all before:duration-500
    before:blur-md
    hover:before:opacity-100
    3xl:text-4xl lg:text-2xl md:text-xl text-lg
    md:py-4 py-3
    md:px-28 px-10
    ${className}
  `;

  // 👉 Se for link
  if (href) {
    return (
      <Link href={href} className={`inline-block ${baseStyles}`}>
        {children}
      </Link>
    );
  }

  // 👉 Se for button normal
  return (
    <button onClick={onClick} className={baseStyles}>
      {children}
    </button>
  );
}
