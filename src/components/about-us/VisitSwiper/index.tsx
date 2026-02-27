"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { SwiperOptions } from "swiper/types";
import type { StaticImageData } from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import swiperLeft from "@/assets/images/swiper-left.png";
import swiperRight from "@/assets/images/swiper-right.png";
import { getLoopConfig } from "@/utils/swiper";

type Slide = {
  id: string;
  image: StaticImageData;
};

type Props = {
  slides: Slide[];
};

export default function VisitSwiper({ slides }: Props) {
    const { loop, autoplay } = getLoopConfig(slides.length);
    const options: SwiperOptions = {
    modules: [Navigation, Pagination, Autoplay],
    slidesPerView: 1,
    spaceBetween: 24,
    speed: 700,
    autoplay: {
      delay: autoplay ? 3000 : 0,
      disableOnInteraction: false,
    },
    loop: loop,
    navigation: {
      prevEl: ".visit-swiper-prev",
      nextEl: ".visit-swiper-next",
    },
    pagination: {
      el: ".visit-swiper-pagination",
      clickable: true,
    },
  };

  return (
    <div className="relative w-full pb-10">
      <button
        type="button"
        className="hidden md:block visit-swiper-prev absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 hover:scale-110 transition-transform cursor-pointer"
        aria-label="Slide anterior"
      >
        <Image src={swiperLeft} alt="Anterior" />
      </button>

      <button
        type="button"
        className="hidden md:block visit-swiper-next absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 hover:scale-110 transition-transform cursor-pointer"
        aria-label="Próximo slide"
      >
        <Image src={swiperRight} alt="Próximo" />
      </button>

      <div className="visit-swiper-pagination md:hidden absolute left-0 right-0 -bottom-2 z-10 flex justify-center gap-2" />

      <Swiper {...options} className="w-full">
        {slides.map((s) => (
          <SwiperSlide key={s.id}>
            <div className="flex flex-col items-center gap-8">
              <div className="max-w-[720px] w-full px-6 md:px-10">
                <Image
                  src={s.image}
                  alt="Visita"
                  className="mx-auto h-auto w-full object-contain hover:scale-105 transition-transform"
                  priority={false}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}