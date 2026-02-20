"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import { images } from "@/app/assets/images";

const logos = [
  { id: "3m", src: images.img3M, alt: "3M" },
  { id: "cashme", src: images.cashMe, alt: "CashMe" },
  { id: "cinpal", src: images.cinpal, alt: "Cinpal" },
  { id: "cipatex", src: images.cipatex, alt: "Cipatex" },
  { id: "compass", src: images.compass, alt: "Compass" },
  { id: "dpaschoal", src: images.dPaschoal, alt: "DPaschoal" },
  { id: "fagron", src: images.fagron, alt: "Fagron" },
  { id: "infinox", src: images.infinox, alt: "Infinox" },
  { id: "lalamove", src: images.lalamove, alt: "Lalamove" },
  { id: "oxitec", src: images.oxitec, alt: "Oxitec" },
  { id: "raizen", src: images.raizen, alt: "Raízen" },
  { id: "solventum", src: images.solventum, alt: "Solventum" },
  { id: "syngenta", src: images.syngenta, alt: "Syngenta" },
];


export default function ClientsMarquee() {
  return (
    <section className="w-full bg-white">
      <div className="py-10">
        <Swiper
          modules={[Autoplay]}
          loop
          slidesPerView="auto"
          spaceBetween={56}
          speed={7000}
          allowTouchMove={false}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="clients-marquee"
        >
          {logos.map((logo, idx) => (
            <SwiperSlide key={logo.id} className="!w-auto">
              <div className="h-8 md:h-12 flex items-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  className="h-full w-auto object-contain"
                  priority={idx < 6}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
