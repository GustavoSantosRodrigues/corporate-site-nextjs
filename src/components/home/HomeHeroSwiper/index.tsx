"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

import swiperLeft from "@/assets/images/swiper-left.png";
import swiperRight from "@/assets/images/swiper-right.png";
import { getLoopConfig } from "@/utils/swiper";

type Slide = {
  id: string;
  titleTop: string;
  titleGreen: string;
  subtitle: string;
  cta: string;
  href: string;
};

const slides: Slide[] = [
  {
    id: "s1",
    titleTop: "UMA AGÊNCIA 360°",
    titleGreen: "COMUNICAÇÃO, MARKETING E EVENTOS",
    subtitle: "Um time completo para te atender do início ao fim do projeto.",
    cta: "Clique e veja a galeria de cases →",
    href: "/cases",
  },
  {
    id: "s2",
    titleTop: "ESTRATÉGIA E CRIAÇÃO",
    titleGreen: "BRANDING, CAMPANHAS E CONTEÚDO",
    subtitle: "Criamos experiências completas com consistência e performance.",
    cta: "Veja nossos serviços →",
    href: "/about-us",
  },
];

export default function HomeHeroSwiper() {
  const { loop, autoplay } = getLoopConfig(slides.length);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="relative w-full bg-black text-white">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={1}
        loop={loop}
        speed={700}
        autoplay={{ delay: autoplay ? 3000 : 0, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        className="hero-swiper relative"
        autoHeight={true}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex items-center py-16 md:py-24">
              <div className="container">
                <div className="relative flex flex-col items-center text-center">
                  <h1 className="3xl:text-[110px] xl:text-7xl lg:text-5xl md:text-3xl text-2xl xl:leading-[1.1] font-extrabold uppercase xl:ml-2">
                    {slide.titleTop}
                  </h1>

                  <h2 className="text-greenPaths-100 3xl:text-[110px] xl:text-7xl lg:text-5xl md:text-3xl text-2xl xl:leading-[1.1] font-extrabold uppercase xl:ml-2 mt-4">
                    {slide.titleGreen}
                  </h2>

                  <p className="mt-5 font-poppins md:text-2xl text-xl font-semibold xl:text-4xl xl:leading-snug">
                    {slide.subtitle}
                  </p>

                  <Link
                    href={slide.href}
                    className="mt-5 flex items-center font-poppins text-sm text-greenPaths-100 underline underline-offset-8 transition-all duration-300 hover:text-white hover:underline hover:underline-offset-4 md:text-2xl xl:mt-10"
                  >
                    {slide.cta}
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <button
          type="button"
          aria-label="Slide anterior"
          onClick={() => swiperRef.current?.slidePrev()}
          className="xl:block cursor-pointer hover:scale-110 transition-transform hidden absolute left-10 top-1/2 -translate-y-1/2 z-20 items-center justify-center"
        >
          <Image src={swiperLeft} alt="Anterior" className="h-12 w-12 object-contain" priority />
        </button>

        <button
          type="button"
          aria-label="Próximo slide"
          onClick={() => swiperRef.current?.slideNext()}
          className="xl:block cursor-pointer hover:scale-110 transition-transform hidden absolute right-10 top-1/2 -translate-y-1/2 z-20 items-center justify-center"
        >
          <Image src={swiperRight} alt="Próximo" className="h-12 w-12 object-contain" priority />
        </button>
      </Swiper>
    </section>
  );
}