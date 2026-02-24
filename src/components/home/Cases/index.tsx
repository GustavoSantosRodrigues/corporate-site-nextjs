"use client";

import { images } from "@/assets/images";
import CaseCard from "../../CaseCard";
import ServicesCarousel from "../../ServicesCarousel";
import { ButtonDefault } from "../../ui";
import type { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import BorderButton from "@/components/ui/borderButton/BorderButton";

type CaseItem = {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  image: StaticImageData;
};

const cases: CaseItem[] = [
  {
    id: "michelin",
    title: "Michelin connected fleet fenatran 2024",
    subtitle: "TRANSPOSUL 2025",
    description: "Estande, ativações, cobertura e gestão",
    image: images.michelinCard,
  },
  {
    id: "3m",
    title: "3M | Ambientação CIC",
    subtitle: "2025",
    description: "Estande, ativações, cobertura e gestão",
    image: images.card3m,
  },
  {
    id: "cipatex",
    title: "Cipatex | Ambientação CIC",
    subtitle: "2025",
    description: "Conceito de coleção",
    image: images.cipatexCard,
  },
  {
    id: "fagron",
    title: "Fagron | We for her",
    subtitle: "2025",
    description: "Campanha de reposicionamento",
    image: images.fagronCard,
  },
  {
    id: "oxitec",
    title: "Oxitec | Spodoptera do bem",
    subtitle: "2025",
    description: "Branding/Design de embalagem",
    image: images.oxitecCard,
  },
];

export default function ProjectsShowcaseSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="h-[71%] bg-black" />
        <div className="h-[29%] bg-[#7C3AED]" />
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-130 w-245 -translate-x-1/2 rounded-full bg-purple-600/20 blur-[140px]" />
        <div className="absolute left-1/2 top-95 h-130 w-245 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[160px]" />
      </div>

      <div className="container relative">
        <div className="px-4 py-16">
          <div className="mx-auto w-full text-center">
            <p className="font-medium 3xl:text-4xl xl:text-2xl text-xl tracking-wide text-white/90 pb-16">
              Temos o orgulho de atender as maiores empresas do Brasil em diversos segmentos.
              Oferecemos um amplo portfólio que se aplica a qualquer necessidade de comunicação.
            </p>
          </div>

          <ServicesCarousel />

          <div className="flex justify-center my-16">
            <ButtonDefault className="cursor-pointer" href="/cases">
              Ver Cases
            </ButtonDefault>
          </div>

          <div className="mx-auto text-center">
            <h2 className="text-3xl font-extrabold tracking-tight text-white xl:text-8xl md:text-6xl">
              GRANDES PROJETOS
              <br />
              <span className="text-greenPaths-100">MARCAM A NOSSA</span>
              <br />
              <span className="text-greenPaths-100">TRAJETÓRIA</span>
            </h2>

            <p className="mx-auto mt-6 md:text-3xl text-xl   text-white font-medium">
              Na nossa comunicação, cada projeto é conduzido com dedicação e expertise, refletindo o empenho
              de uma equipe apaixonada pelo que faz. Com foco na qualidade de cada entrega, transformamos
              desafios em resultados surpreendentes.
            </p>
          </div>

          <div className="hidden xl:block">
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
              {Array.isArray(cases) && cases.map((item) => (
                <CaseCard
                  href={`/cases/${item.id}`}
                  key={item.id}
                  title={item.title}
                  subtitle={item.subtitle}
                  description={item.description}
                  image={item.image}
                />
              ))}
            </div>
          </div>

          <div className="block xl:hidden mt-16">
            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              speed={1000}
              loop={true}
              spaceBetween={16}
              slidesPerView={1}
              breakpoints={{
                1024: { slidesPerView: 2 },
              }}
            >
              {cases.map((item) => (
                <SwiperSlide key={item.id} className="h-auto">
                  <div className="h-full">
                    <CaseCard
                      href={`/cases/${item.id}`}
                      title={item.title}
                      subtitle={item.subtitle}
                      description={item.description}
                      image={item.image}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="flex justify-center mt-16">
          <BorderButton href="/cases" title="Ver Cases" />
          </div>
        </div>
      </div>
    </section>
  );
}