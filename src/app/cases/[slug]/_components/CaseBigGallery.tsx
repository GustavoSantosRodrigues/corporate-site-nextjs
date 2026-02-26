"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";

import swiperLeft from "@/assets/images/swiper-left.png";
import swiperRight from "@/assets/images/swiper-right.png";

type GalleryItem = {
  title: string;
  image: string;
};

type Props = {
  title?: string;
  items: GalleryItem[];
};

export default function CaseBigGallery({ title, items }: Props) {
  if (!items?.length) return null;

  return (
    <section className="relative w-full overflow-hidden bg-[#07040e] md:pb-24 pb-5">
      <div className="relative mx-auto w-full max-w-6xl px-4">
        {title && (
          <div className="text-center xl:my-32 my-16 px-4">
            <h2 className="text-white font-ArtegraSans font-black 3xl:text-[85px] 3xl:leading-tight lg:text-5xl text-3xl uppercase">
              {title.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-greenPaths-100">
                {title.split(" ").slice(-1)}
              </span>
            </h2>
          </div>
        )}

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
            delay: 3200,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={900}
          slidesPerView={1}
          spaceBetween={50}
        >
          {items.map((it, idx) => (
            <SwiperSlide key={`${it.title}-${idx}`}>
              <div className="relative w-full overflow-hidden rounded-2xl">
                <div className="relative h-65 sm:h-85 md:h-110 lg:h-130 xl:h-140">
                  <Image
                    src={it.image || "/images/fallback-gallery.png"}
                    alt={it.title ?? `Imagem ${idx + 1}`}
                    fill
                    priority={idx === 0}
                    className="object-contain"
                  />
                </div>

                <div className="px-2 pt-4 text-center text-white/90 font-medium">
                  {it.title}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}