"use client";

import CaseCard from "../../CaseCard";
import ServicesCarousel from "../../ServicesCarousel";
import { ButtonDefault } from "../../ui";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import BorderButton from "@/components/ui/borderButton/BorderButton";
import { useEffect, useState } from "react";
import { getFeaturedCases } from "@/services/casesService";
import { z } from "zod";

const CaseApiItemSchema = z.object({
  id: z.number(),
  slug: z.string(),
  categories: z.array(z.object({
    key: z.string(),
    label: z.string(),
    images_category: z.string(),
  })),
  isFeatured: z.boolean(),
  orderFeatured: z.number().optional(),

  card: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    description: z.string().optional(),
    image: z.string(),
  }),
}); 

export type CaseApiItem = z.infer<typeof CaseApiItemSchema>;

export default function ProjectsShowcaseSection() {

  const [cases, setCases] = useState<CaseApiItem[]>([]);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getFeaturedCases();
        // console.log("Raw data:", data);
        setCases(data);
        // console.log("Cases loaded:", data);
      } catch (error) {
        console.error("Error loading cases:", error);
      }
    };
    load();
  }, [])

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
                  key={item.id}
                  href={`/cases/${item.slug}`}
                  title={item.card.title}
                  subtitle={item.card.subtitle}
                  description={item.card.description}
                  image={item.card.image}
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
                      href={`/cases/${item.slug}`}
                      title={item.card.title}
                      subtitle={item.card.subtitle}
                      description={item.card.description}
                      image={item.card.image}
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