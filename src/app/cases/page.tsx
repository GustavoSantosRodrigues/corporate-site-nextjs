"use client";
import { images } from "@/assets/images";
import CaseCard from "@/components/CaseCard";
import { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useMemo, useState } from "react";
import { Target, CalendarDays, Megaphone, BadgeCheck, Smartphone, MonitorSpeaker } from "lucide-react";

type CategoryKey = "all" | "planejamento" | "eventos" | "campanhas" | "branding" | "digital";

const categories: { key: CategoryKey; label: string; icon: React.ElementType }[] = [
  { key: "all", label: "Todos", icon: Target },
  { key: "planejamento", label: "Planejamento", icon: Target },
  { key: "eventos", label: "Eventos", icon: CalendarDays },
  { key: "campanhas", label: "Campanhas", icon: Megaphone },
  { key: "branding", label: "Branding", icon: BadgeCheck },
  { key: "digital", label: "Digital", icon: Smartphone },
];

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

  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");

  const filteredCases = useMemo(() => {
    if (activeCategory === "all") return cases;
    return cases.filter((c: any) => c.category === activeCategory);
  }, [activeCategory]);


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

      <div className="bg-purplePaths-100">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center gap-3 overflow-x-auto whitespace-nowrap [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {categories.map(({ key, label, icon: Icon }) => {
              const isActive = activeCategory === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveCategory(key)}
                  className={[
                    "inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-semibold transition-all",
                    "hover:bg-white/10",
                    isActive ? "bg-white text-black border-white" : "text-white border-white/25",
                  ].join(" ")}
                >
                  <Icon size={16} />
                  {label}
                </button>
              );
            })}
          </div>
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