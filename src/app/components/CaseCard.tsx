import Image, { StaticImageData } from "next/image";
import { images } from "@/app/assets/images";
import image from "next/image";

type CaseCardProps = {
    title: string;
    subtitle?: string;
    description?: string;
    image: StaticImageData;
    onClick?: () => void;
};

export default function CaseCard({
  title,
  subtitle,
  description = "Descrição do Case*",
  image,
  onClick,
}: CaseCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group w-full h-full text-left cursor-pointer"
    >
      <div className="flex h-full flex-col overflow-hidden rounded-2xl bg-white">
        
        <div className="relative aspect-[4/3] w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 420px"
          />

          <div className="pointer-events-none absolute inset-0 bg-[#6D28D9]/70 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />

          <div className="pointer-events-none absolute inset-0 grid place-items-center opacity-0 transition duration-200 group-hover:opacity-100">
            <Image src={images.union} alt="+" width={80} height={80} />
          </div>
        </div>

        {/* conteúdo */}
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-xl font-extrabold uppercase leading-tight">
            {title}
            {subtitle ? ` | ${subtitle}` : ""}
          </h3>

          {/* empurra descrição pra baixo */}
          <p className="mt-auto pt-4 text-lg text-black/80">
            {description}
          </p>
        </div>
      </div>
    </button>
  );
}