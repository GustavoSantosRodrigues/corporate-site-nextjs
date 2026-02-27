"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperOptions } from "swiper/types";
import { Pagination, Autoplay } from "swiper/modules";
import { getLoopConfig } from "@/utils/swiper";

import "swiper/css";
import "swiper/css/pagination";

type Testimonial = { id: string; text: string; author: string; };
type Props = { items: Testimonial[]; };

export default function TestimonialsSwiper({ items }: Props) {
  const { loop, autoplay } = getLoopConfig(items.length);
  const options: SwiperOptions = {
    modules: [Pagination, Autoplay],
    loop: true,
    autoplay: {
      delay: autoplay ? 5000 : 0,
      disableOnInteraction: false,
    },
    speed: 1000,
    spaceBetween: 24,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-testimonials-pagination",
      clickable: true,
    },
    breakpoints: {
      768: { slidesPerView: 2 },
      1280: { slidesPerView: 3 },
    },
  };

  return (
    <div className="swiper-testimonials relative w-full">
      <div className="swiper-testimonials-pagination" />

      <Swiper {...options} className="w-full">
        {items.map((t) => (
          <SwiperSlide key={t.id} className="h-auto">
            <article className="h-full rounded-2xl bg-greenPaths-100 p-8 text-black">
              <p className="text-lg leading-relaxed">“{t.text}”</p>
              <p className="mt-6 font-bold">– {t.author}</p>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}