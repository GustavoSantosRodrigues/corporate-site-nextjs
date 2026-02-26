"use client";

import CaseCard from "@/components/CaseCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import ButtonOutlinePurple from "@/components/ui/buttonOutlinePurple/buttonOutline";

type CaseItem = {
    id: number;
    slug: string;
    card: {
        title: string;
        subtitle?: string;
        description?: string;
        image: string;
    };
};

export default function RelatedCases({ cases }: { cases: CaseItem[] }) {
    if (!cases?.length) return null;

    return (
        <>
            <div className="bg-purplePaths-100 py-10">
                <div className="container">
                    <div className="xl:py-10 py-5">
                        <h2 className="font-black text-white 3xl:text-7xl xl:text-5xl md:text-4xl text-2xl text-center uppercase 3xl:leading-tight">
                            <span className="text-greenPaths-100">Cases semelhantes</span> {" "}
                            para inspirar seu próximo passo
                        </h2>
                    </div>
                    {/* Desktop grid */}
                    <div className="hidden xl:block">
                        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
                            {cases.map((item) => (
                                <CaseCard
                                    key={item.id}
                                    title={item?.card?.title || ""}
                                    subtitle={item?.card?.subtitle}
                                    description={item?.card?.description}
                                    image={item?.card?.image || ""}
                                    href={`/cases/${item.slug}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Mobile swiper */}
                    <div className="block xl:hidden mt-16">
                        <Swiper
                            modules={[Autoplay]}
                            autoplay={{ delay: 2500, disableOnInteraction: false }}
                            speed={1000}
                            loop
                            spaceBetween={16}
                            slidesPerView={1}
                            breakpoints={{
                                640: { slidesPerView: 1.2 },
                                768: { slidesPerView: 1.6 },
                                1024: { slidesPerView: 2 },
                            }}
                        >
                            {cases.map((item) => (
                                <SwiperSlide key={item.id} className="h-auto">
                                    <div className="h-full">
                                        <CaseCard
                                            title={item?.card?.title || ""}
                                            subtitle={item?.card?.subtitle}
                                            description={item?.card?.description}
                                            image={item?.card?.image || ""}
                                            href={`/cases/${item.slug}`}
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

            </div>
            <div className="flex justify-center mt-16">
                <ButtonOutlinePurple href="/cases" title="Ir para página de cases" />
            </div>
        </>
    );
}