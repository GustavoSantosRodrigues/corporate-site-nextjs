import Image from "next/image";
import { images } from "@/assets/images";

export default function TrustSection() {
  return (
    <section className="relative bg-black text-white py-5">

      <div className="absolute left-0 w-full 3xl:-top-65 xl:-top-40 md:-top-36 lg:-top-48 z-20 pointer-events-none md:block hidden">
        <Image
          src={images.handOnly}
          alt="Aperto de mãos"
          className="w-full max-w-500 mx-auto object-contain"
          priority
        />
      </div>

      <div className="container my-10 xl:pt-72 md:pt-28">
        <h2
          className="
            text-center uppercase font-extrabold
            3xl:text-[110px]
            xl:text-7xl
            md:text-5xl
            text-3xl
            leading-[1.05]
          "
        >
          PARCERIA COM BASE <br />
          NA <span className="text-greenPaths-100">CONFIANÇA</span>
        </h2>
      </div>

    </section>
  );
}
