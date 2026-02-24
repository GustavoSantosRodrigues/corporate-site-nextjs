import Link from "next/link";

type BorderButtonProps = {
  href: string;
  title: string;
  className?: string; 
};

export default function BorderButton({
  href,
  title,
  className = "",
}: BorderButtonProps) {
  return (
    <Link href={href}>
      <div className="group relative inline-block mb-2 mr-2">
        <div
          className={`
            border-2 border-white py-4 md:px-7 px-4 rounded-full inline-block
            transition-all duration-300 ease-in-out
            group-hover:bg-greenPaths-100 group-hover:border-white
            ${className}
          `}
        >
          <h2
            className="
              font-semibold 3xl:text-xl md:text-base text-sm text-black uppercase
              transition-all duration-300 ease-in-out
              group-hover:text-white
            "
          >
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
}