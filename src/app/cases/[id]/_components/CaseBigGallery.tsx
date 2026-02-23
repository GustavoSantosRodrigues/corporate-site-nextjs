"use client";

import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";

import swiperLeft from "@/assets/images/swiper-left.png";
import swiperRight from "@/assets/images/swiper-right.png";

type Props = {
  images: { src: StaticImageData; alt?: string }[];
};

export default function CaseBigGallery({ images }: Props) {
  return (
    <section className="relative w-full overflow-hidden bg-[#07040e] pb-24">
      <div className="relative mx-auto w-full max-w-6xl px-4">

        <button className="cursor-pointer hover:scale-110 transition-transform swiper-left absolute -left-15 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 xl:flex items-center justify-center">
          <Image src={swiperLeft} alt="Anterior" />
        </button>

        <button className="cursor-pointer hover:scale-110 transition-transform swiper-right absolute -right-15 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 xl:flex items-center justify-center">
          <Image src={swiperRight} alt="Próximo" />
        </button>

        <Swiper
          modules={[Autoplay, Navigation]}
          loop
          navigation={{
            prevEl: ".swiper-left",
            nextEl: ".swiper-right",
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={900}
          slidesPerView={1}
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative w-full overflow-hidden rounded-2xl">

                {/* altura responsiva */}
                <div className="relative h-65 sm:h-85 md:h-110 lg:h-130 xl:h-140">
                  <Image
                    src={img.src}
                    alt={img.alt ?? `Imagem ${idx + 1}`}
                    fill
                    priority={idx === 0}
                    className="object-contain"
                  />
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}