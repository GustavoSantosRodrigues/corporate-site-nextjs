"use client";

import { images } from "@/assets/images";
import CaseCard from "@/components/CaseCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { useMemo, useState, useEffect } from "react";

import { getCases } from "@/services/casesService";
import { CaseApiItem } from "@/schemas/case.schema";

export default function CasesPage() {
  const [cases, setCases] = useState<CaseApiItem[]>([]);

  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [search, setSearch] = useState("");
  const q = search.toLowerCase();

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getCases();
        setCases(data);
      } catch (err) {
        console.error("Error loading cases:", err);
        setCases([]);
      }
    };

    load();
  }, []);

const filteredCases = useMemo(() => {
  const q = search.trim().toLowerCase();

  return cases.filter((c) => {
    const matchesCategory =
      activeCategory === "all" ||
      c.categories?.some((cat) => cat.key === activeCategory);

    const matchesSearch =
      !q ||
      c.card.title.toLowerCase().includes(q) ||
      (c.card.description ?? "").toLowerCase().includes(q) ||
      (c.card.subtitle ?? "").toLowerCase().includes(q) ||
      c.categories?.some((cat) => cat.label.toLowerCase().includes(q));

    return matchesCategory && matchesSearch;
  });
}, [cases, activeCategory, search]);

  const categoriesFromApi = useMemo(() => {
    const map = new Map();

    cases.forEach((c) => {
      c.categories?.forEach((cat) => {
        map.set(cat.key, cat);
      });
    });

    return [
      { key: "all", label: "Todos" },
      ...Array.from(map.values()),
    ];
  }, [cases]);

  return (
    <section>
      <div
        className="relative w-full h-screen flex items-center justify-center text-center px-6 bg-black bg-cover"
        style={{ backgroundImage: `url(${images.bannerCases.src})` }}
      >
        <div className="md:pt-56 pt-32">
          <h1 className="text-5xl md:text-6xl xl:text-9xl font-extrabold">
            <span className="text-white">NOSSOS </span>
            <span className="text-green-500">CASES</span>
          </h1>

          <p className="mt-6 max-w-5xl md:text-3xl text-xl text-white">
            Transformamos cada evento, campanha e estratégia em
            oportunidades para você marcar presença e se destacar.
          </p>
        </div>
      </div>

      {/* CATEGORIAS */}
      <div className="bg-purplePaths-100">
        <div className="container mx-auto px-6 py-5">
          <div className="flex gap-3 overflow-x-auto whitespace-nowrap">
            {categoriesFromApi.map((cat) => {
              const isActive = activeCategory === cat.key;

              return (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className={` cursor-pointer inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-semibold transition-all ${isActive
                    ? "bg-white text-black border-white"
                    : "text-white border-white/25 hover:bg-white/10"
                    }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* GRID DESKTOP */}
      <div className="bg-purplePaths-100 px-6 py-10">
        <div className="container">
          <div className="hidden xl:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((item) => (
              <CaseCard
                key={item.id}
                title={item.card.title}
                subtitle={item.card.subtitle}
                description={item.card.description}
                image={item.card.image}
                href={`/cases/${item.slug}`}
              />
            ))}
          </div>

          {/* MOBILE */}
          <div className="xl:hidden mt-16">
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 2500 }}
              loop
              spaceBetween={16}
              slidesPerView={1}
              breakpoints={{ 1024: { slidesPerView: 2 } }}
            >
              {filteredCases.map((item) => (
                <SwiperSlide key={item.id}>
                  <CaseCard
                    title={item.card.title}
                    subtitle={item.card.subtitle}
                    description={item.card.description}
                    image={item.card.image}
                    href={`/cases/${item.slug}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}