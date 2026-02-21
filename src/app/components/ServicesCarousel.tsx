"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";

import swiperLeft from "@/app/assets/images/swiper-left.png";
import swiperRight from "@/app/assets/images/swiper-right.png";
import Image, { StaticImageData } from "next/image";
import { images } from "@/app/assets/images";

type ServiceItem = {
    title: string;
    desc: string;
    image: StaticImageData;
};


const services: ServiceItem[] = [
    { 
        title: "Planejamento e campanhas", 
        desc: "Concebemos, lançamos, impulsionamos vendas, executamos trade marketing, promovemos endomarketing e criamos planos de mídia para maximizar sua presença on-line e off-line.", 
        image: images.planejamento 
    },
    { 
        title: "Materiais para apoio de vendas", 
        desc: "Produzimos manuais, catálogos, folhetos técnicos, treinamentos de vendas, press kits, apresentações de resultados e vídeos explicativos para potencializar sua comunicação e impacto de vendas.", 
        image: images.material
    },
    { 
        title: "Marketing Digital", 
        desc: "Gerenciamos redes sociais, sites e hotsites, implementamos SAC 2.0, otimizamos mídia performance, ações estratégicas e presença on-line com influenciadores.", 
        image: images.marketing
    },
    { 
        title: "Mapeamento de mercado", 
        desc: "Oferecemos serviços essenciais em pesquisa de mercado, incluindo monitoramento de marca, análise de Share of Voice e Search, e identificação de tendências de mercado para impulsionar o crescimento empresarial.", 
        image: images.mapeamentoMd
    },
    { 
        title: "Feiras e live marketing", 
        desc: "Grande expertise na criação e produção de eventos presenciais e on-line, ambientação de stands para feiras, ativações de guerrilha e organização de convenções, focando em soluções inovadoras de live marketing.", 
        image: images.feiraMkt
    },
    { 
        title: "Gestão e produção gráfica", 
        desc: "Gerenciamos a produção gráfica, abrangendo desde a seleção de fornecedores e acompanhamento de entregas até a produção de brindes, materiais gráficos, conteúdo audiovisual, logística e manuseio de materiais.", 
        image: images.gestaoGrafica
    },
];


export default function ServicesCarousel() {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <div className="relative mx-auto w-full max-w-5xl">
            {/* setas (fora do swiper, no meio da altura) */}
            <button
                type="button"
                className="swiper-left hidden md:flex absolute left-[-72px] top-1/2 -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full bg-white/90 text-[#5b21b6] shadow-lg hover:scale-105 transition"
                aria-label="Anterior"
                onClick={() => swiperRef.current?.slidePrev()}
            >
                <Image
                    src={swiperLeft}
                    alt="Anterior"
                    className="h-12 w-12 object-contain cursor-pointer"
                    priority
                />
            </button>

            <button
                type="button"
                className="swiper-right hidden md:flex absolute right-[-72px] top-1/2 -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full bg-white/90 text-[#5b21b6] shadow-lg hover:scale-105 transition"
                aria-label="Próximo"
                onClick={() => swiperRef.current?.slideNext()}
            >
                <Image
                    src={swiperRight}
                    alt="Próximo"
                    className="h-12 w-12 object-contain cursor-pointer"
                    priority
                />
            </button>

            {/* Swiper */}
            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                loop
                grabCursor
                spaceBetween={45}
                slidesPerView={3}
            >
                {services.map((item, index) => {
                    return (
                        <SwiperSlide key={index} className="pt-10">
                            <article className="relative mx-auto w-full max-w-90 rounded-[28px] bg-white px-10 pb-12 pt-14 text-center shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
                                {/* ícone em bolinha no topo */}
                                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 ">
                                    <div className="flex items-center justify-center w-20 h-20 bg-white border-4 border-purple-600 rounded-full shadow-lg -top-10">
                                        <Image src={item.image} alt={item.title} width={30} height={30} />
                                    </div>
                                </div>

                                <h3 className="text-[34px] font-extrabold leading-tight text-[#0b0613]">
                                    {item.title}
                                </h3>

                                <p className="mt-6 text-[18px] leading-relaxed text-black/70">
                                    {item.desc}
                                </p>
                            </article>
                            {/* title: string;
    desc: string;
    icon: string; */}
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}