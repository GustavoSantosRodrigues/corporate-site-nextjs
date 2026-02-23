"use client";
import { images } from "@/assets/images";
import CaseCard from "@/components/CaseCard";
import { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

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
export default function CasesPage() {
  return (
    <section >
      <div className="relative w-full h-screen flex items-center justify-center text-center px-6 bg-black bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: `url(${images.bannerCases.src})`,
        }}>
        <div className="md:pt-56 pt-32">
          <h1 className="text-5xl md:text-6xl xl:text-9xl font-extrabold tracking-tight">
            <span className="text-white">NOSSOS </span>
            <span className="text-green-500">CASES</span>
          </h1>

          <p className="mt-6 max-w-5xl md:text-3xl text-xl text-white">
            Transformamos cada evento, campanha e estratégia em oportunidades
            para você marcar presença e se destacar com autenticidade no mercado.
          </p>
        </div>
      </div>

      <div className="bg-purplePaths-100 mx-auto px-6 md:py-16 py-10">
        <div className="container ">
          <div className="hidden xl:block ">
            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
              {Array.isArray(cases) && cases.map((item) => (
                <CaseCard
                  key={item.id}
                  title={item.title}
                  subtitle={item.subtitle}
                  description={item.description}
                  image={item.image}
                  href={`/cases/${item.id}`}
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
                      title={item.title}
                      subtitle={item.subtitle}
                      description={item.description}
                      image={item.image}
                      href={`/cases/${item.id}`}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>


  );
}