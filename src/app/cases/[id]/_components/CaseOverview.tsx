import Image from "next/image";
import BorderButton from "@/components/ui/borderButton/BorderButton";

type Props = {
  title: string;
  highlight: string;
  description: string;
  bullets: string[];
  sideImage: any;
};

export default function CaseOverview({ title, highlight, description, bullets, sideImage }: Props) {
  return (
    <div className="container mx-auto flex xl:flex-row flex-col justify-between gap-12 py-20">
      <div className="xl:w-6/12 w-full">
        <BorderButton />

        <h2 className="mt-6 xl:text-7xl md:text-4xl text-xl font-black">
          {title} <br />
          <span className="text-purplePaths-100">{highlight}</span>
        </h2>

        <p className="mt-6 text-lg text-gray-700 max-w-xl">{description}</p>

        <ul className="mt-6 space-y-2 text-lg font-semibold text-purplePaths-100">
          {bullets.map((b) => (
            <li key={b}>• {b}</li>
          ))}
        </ul>
      </div>

      <div className="xl:w-6/12 w-full">
        <Image src={sideImage} alt="Imagem do case" priority className="max-w-full h-auto" />
      </div>
    </div>
  );
}