"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/pagination";


// ajuste os paths conforme seu projeto:
import swiperLeft from "@/app/assets/images/swiper-left.png";
import swiperRight from "@/app/assets/images/swiper-right.png";

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
        cta: "Clique e veja a galeria de cases",
        href: "/cases",
    },
    {
        id: "s2",
        titleTop: "ESTRATÉGIA E CRIAÇÃO",
        titleGreen: "BRANDING, CAMPANHAS E CONTEÚDO",
        subtitle: "Criamos experiências completas com consistência e performance.",
        cta: "Veja nossos serviços",
        href: "/sobre",
    },
];

export default function HomeHeroSwiper() {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <section className="relative w-full bg-black text-white">
            <Swiper
                modules={[Pagination, Navigation]}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                slidesPerView={1}
                loop
                pagination={{ clickable: true }}
                className="hero-swiper relative"
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        {/* altura do hero */}
                        <div className="min-h-[calc(100vh-96px)] md:min-h-[calc(100vh-120px)] flex items-center">
                            <div className="container">
                                <div className="relative flex flex-col items-center text-center py-16 md:py-24">
                                    {/* TÍTULO 1 (branco) */}
                                    <h1 className="3xl:text-[110px] xl:text-7xl md:text-5xl text-3xl xl:leading-[1.1] font-extrabold uppercase xl:ml-2">
                                        {slide.titleTop}
                                    </h1>

                                    {/* TÍTULO 2 (verde) */}
                                    <h2 className="text-greenPaths-100 3xl:text-[110px] xl:text-7xl md:text-5xl text-3xl xl:leading-[1.1] font-extrabold uppercase xl:ml-2 mt-4">
                                        {slide.titleGreen}
                                    </h2>

                                    {/* SUBTITLE */}
                                    <p className="mt-10 md:mt-12 text-base md:text-xl font-semibold text-white/90">
                                        {slide.subtitle}
                                    </p>

                                    {/* CTA */}
                                    <Link
                                        href={slide.href}
                                        className="mt-10 inline-flex items-center gap-3 text-greenPaths-100 text-base md:text-lg underline underline-offset-8 hover:opacity-80 transition"
                                    >
                                        {slide.cta}
                                        <span className="text-2xl leading-none">↓</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

                {/* SETA ESQUERDA (custom) */}
                <button
                    type="button"
                    aria-label="Slide anterior"
                    onClick={() => swiperRef.current?.slidePrev()}
                    className="cursor-pointer hover:scale-110 transition-transform hidden md:flex absolute left-10 top-1/2 -translate-y-1/2 z-20 items-center justify-center"
                >
                    <Image
                        src={swiperLeft}
                        alt="Anterior"
                        className="h-12 w-12 object-contain"
                        priority
                    />
                </button>

                {/* SETA DIREITA (custom) */}
                <button
                    type="button"
                    aria-label="Próximo slide"
                    onClick={() => swiperRef.current?.slideNext()}
                    className="cursor-pointer hover:scale-110 transition-transform hidden md:flex absolute right-10 top-1/2 -translate-y-1/2 z-20 items-center justify-center"
                >
                    <Image
                        src={swiperRight}
                        alt="Próximo"
                        className="h-12 w-12 object-contain"
                        priority
                    />
                </button>
            </Swiper>
        </section>
    );
}
