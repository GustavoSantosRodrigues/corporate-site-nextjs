"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

type Item = {
    title?: string;
    text?: string;
    icon?: string;
};

type Props = {
    items?: Item[];
};

function Card({ item }: { item: Item }) {
    return (
        <div className="relative flex h-full flex-col items-center text-center px-6 py-14">
            {item.icon && <div className="mb-6"><img src={item.icon} alt={item.title} /></div>}

            <h3 className="font-black uppercase text-white xl:text-6xl md:text-5xl text-4xl">
                {item.title}
            </h3>

            <p className="mt-6 max-w-md font-semibold text-white/90 md:text-lg text-base leading-relaxed">
                {item.text}
            </p>
        </div>
    );
}

export default function CaseChallengeSolution({ items }: Props) {
    const desktopIsSwiper = items && items.length > 3;

    return (
        <section className="relative w-full overflow-hidden bg-[#07040e] md:py-20 py-2">
            <div className="xl:hidden">
                {/* MOBILE/TABLET*/}
                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                        waitForTransition: false,
                    }}
                    speed={800}
                    spaceBetween={24}
                    slidesPerView={1.05}
                >
                    {items?.map((item, idx) => (
                        <SwiperSlide key={idx}>
                            <Card item={item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* DESKTOP */}
            <div className="hidden xl:block">
                {desktopIsSwiper ? (
                    <Swiper
                        modules={[Autoplay]}
                        loop
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        speed={800}
                        spaceBetween={32}
                        slidesPerView={3}
                    >
                        {items?.map((item, idx) => (
                            <SwiperSlide key={idx}>
                                <Card item={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <div className="container mx-auto grid grid-cols-3 gap-8">
                        {items?.map((item, idx) => (
                            <div key={idx} className="relative">
                                {idx !== 0 && (
                                    <div className="absolute left-0 top-6 h-[calc(100%-3rem)] w-px bg-white/30" />
                                )}
                                <Card item={item} />
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="text-center xl:my-32 my-16 px-4">
                <h2 className="text-white font-black 3xl:text-8xl lg:text-5xl text-3xl uppercase">
                    Tecnologia e presença estratégica
                    <span className="text-greenPaths-100"> em movimento</span>
                </h2>
            </div>
        </section>
    );
}