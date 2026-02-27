import Image from "next/image";
type Tag = {
  title?: string;
  // highlight?: string;
  // description?: string;
  bullets?: string[];
  sideImage?: string;
  tags?: string[];
};

export default function CaseOverview({ title, bullets, sideImage, tags }: Tag) {
  return (
    <div className="container mx-auto flex xl:flex-row flex-col justify-between gap-12 py-20">
      <div className="xl:w-6/12 w-full">

        <ul className="flex flex-wrap gap-2">
          {Array.isArray(tags) && tags.map((tag, idx) => (
            <li
              key={`${tag}-${idx}`}
              className="
            border border-purplePaths-100
            text-black font-semibold uppercase
            px-6 py-3 rounded-full
            text-sm md:text-base
            whitespace-nowrap
            hover:bg-purplePaths-100
            transition-colors
            hover:text-white
            duration-300
          ">
              {tag}
            </li>
          ))}
        </ul>

        <h2 className="mt-6 xl:text-7xl md:text-4xl text-xl font-black">
          {title} <br />
        </h2>

        <ul className="mt-6 space-y-2 text-lg font-semibold text-purplePaths-100">
          {bullets?.map((b, idx) => (
            <li key={`${b}-${idx}`}>• {b}</li>
          ))}
        </ul>
      </div>

      <div className="xl:w-6/12 w-full">
        <Image
          src={sideImage || "/images/fallback-side.png"}
          alt="Imagem do case"
          priority
          width={400}
          height={400}
          className="h-auto xl:block hidden xl:max-w-full mx-auto xl:mx-0"
        />
      </div>
    </div>
  );
}