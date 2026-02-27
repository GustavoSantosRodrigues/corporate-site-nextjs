"use client";

import Image from "next/image";
import { images } from "@/assets/images";
import { ButtonDefault } from "@/components/ui";
import TestimonialsSwiper from "@/components/about-us/TestimonialsSwiper";
import VisitSwiper from "@/components/about-us/VisitSwiper";
const testimonials = [
  {
    id: "t1",
    text: "Equipe multidisciplinar com profissionais de alta capacidade e ambiente acolhedor! Obrigado Base3!",
    author: "Eduardo Santos",
  },
  {
    id: "t2",
    text: "Estou extremamente satisfeito com os serviços prestados pela Base3... Recomendo fortemente.",
    author: "Eduardo Santosa",
  },
  {
    id: "t3",
    text: "Excelente agência. Tive muito boa experiência.",
    author: "JL Fairbanks",
  },
  {
    id: "t4",
    text: "Mais um depoimento aqui pra virar slide quando passar de 3 no xl.",
    author: "Cliente X",
  },
];



const slides = [
  {
    id: "1",
    image: images.visita1,
  },
  {
    id: "2",
    image: images.visita2,
  },
  {
    id: "3",
    image: images.visita3,
  },
  {
    id: "4",
    image: images.visita4,
  },
  {
    id: "5",
    image: images.visita5,
  },
];

export default function AboutUs() {

  return (
    <>
      <section className="relative w-full xl:h-screen md:h-[50vh] h-[30vh] overflow-hidden bg-black">

        <Image
          src={images.sobreNos}
          alt="Sobre nós"
          fill
          priority
          className="object-cover select-none pointer-events-none"
        />

        <div className="absolute left-1/2 top-1/2 z-10 w-full max-w-6xl -translate-x-1/2 -translate-y-1/2 px-6 text-center pt-40">

          <h2 className="font-extrabold uppercase tracking-tight text-white text-4xl lg:text-9xl">
            QUEM <span className="text-greenPaths-100">SOMOS</span>
          </h2>

          <p className="mx-auto mt-8 max-w-5xl font-poppins text-white text-xl md:text-2xl leading-relaxed">
            Não é de hoje que ajudamos marcas a se transformarem por meio de uma
            comunicação versátil, eficiente e atual.
          </p>
        </div>
      </section>

      <section className="bg-white md:py-16 py-8">
        <div className="container mx-auto flex flex-wrap px-6">

          <div className="w-full lg:w-6/12">

            <h2 className="mt-2 font-black uppercase text-black text-4xl md:text-6xl xl:text-7xl">
              <span className="text-purple-600"> DESDE 1998</span> <br />
              ENTREGAMOS <br />
              GRANDES <br />
              PROJETOS <br />
              E RESULTADOS
            </h2>

            <p className="3xl:text-2xl lg:text-xl font-medium mt-5 lg:text-left text-center">
              Com ideias que cruzam fronteiras e relações duradouras,
              entregamos soluções únicas para negócios de todos os tamanhos e
              segmentos. Nossa base é em Campinas mas o impacto é nacional.
              <br /><br />
              Reinvente. Surpreenda. Evolua com a Base3.
            </p>

            <div className="mt-16 flex justify-center lg:justify-start">
              <ButtonDefault href="/contact">Conheça a Base3</ButtonDefault>
            </div>
          </div>

          <div className="w-full lg:w-6/12 mt-12 lg:mt-0 flex justify-center">
            <Image
              src={images.lampada}
              alt="Lâmpada"
              priority
              className="h-auto w-full max-w-md select-none"
            />
          </div>

        </div>
      </section>

      <section className="relative md:py-16 py-8 bg-[linear-gradient(to_bottom,white_70%,black_50%)]">
        <div className="container mx-auto">

          <div className="3xl:mb-[-13.7rem] md:mb-[-8.7rem] mb-[-6.7rem]">
            <Image
              src={images.logoBase3Section}
              alt="logo-base3-section.png"
              loading="lazy"
            />
          </div>

          <div className="flex items-center flex-col text-center">
            <h2 className="text-black 3xl:text-8xl xl:text-6xl md:text-4xl text-2xl font-black uppercase">
              Um time completo<br />
              <span className="text-purplePaths-100">
                pronto para te atender
              </span>
            </h2>

            <div className="font-poppins 3xl:text-4xl xl:text-3xl leading-10 font-semibold mt-5 md:mb-20 mb-5 text-black">
              Criatividade que engaja. Estratégias que transformam. Resultados que conectam.
            </div>
          </div>

          <div className="mx-auto px-6">
            <Image
              src={images.equipeBase3}
              alt="equipe-base-3.png"
              loading="lazy"
            />
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-white xl:text-7xl md:text-5xl font-bold">
              Feedbacks
            </h2>
          </div>
        </div>
      </section>

      <section className="md:py-16 py-8 container mx-auto">
        <TestimonialsSwiper items={testimonials} />
      </section>

      <section className="bg-white">
        <div className="container mx-auto px-6">
          <VisitSwiper slides={slides} />
        </div>
      </section>
    </>
  );
}