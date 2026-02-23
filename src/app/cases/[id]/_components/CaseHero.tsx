import Image from "next/image";

type Props = {
  banner: any;
  title: string;
  subtitle: string;
};

export default function CaseHero({ banner, title, subtitle }: Props) {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Image src={banner} alt="Banner do case" fill priority className="object-cover" />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-6">
          <h1 className="uppercase font-black xl:text-7xl md:text-6xl text-4xl text-white">
            {title.split(" ").slice(0, 2).join(" ")} <br />
            {title.split(" ").slice(2).join(" ")}
          </h1>

          <p className="font-semibold xl:text-7xl md:text-6xl text-4xl text-greenPaths-100">
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}