"use client";

import Image from "next/image";
import { images } from "@/app/assets/images";

export default function ContactSection() {
  return (
   <section className="relative bg-white md:py-24 py-16">
      <div className="container relative mx-auto grid items-center gap-12 px-4 xl:grid-cols-2">

        <div className="relative">
          
          <Image
            src={images.aviaoPapel}
            alt="avião de papel"
            className="xl:block hidden pointer-events-none absolute -top-60 left-[70%] -translate-x-1/2 opacity-90 z-50"
            priority
          />

          <h2 className="xl:text-8xl md:text-6xl text-3xl font-extrabold ">
            <span className="text-purple-600">COMUNICAÇÃO</span>
            <br />
            <span className="text-black">É O NOSSO NEGÓCIO.</span>
          </h2>

          <p className="mt-6 text-lg text-black md:text-xl">
            Por isso estamos sempre prontos para conversar com você ;)
          </p>     
        </div>

        <div className="mx-auto w-full max-w-md rounded-lg border border-black/10 bg-white p-6 shadow-lg">

          <form className="space-y-4">

            <div>
              <label className="text-sm text-black/80">Nome</label>
              <input
                type="text"
                placeholder="Nome"
                className="mt-1 w-full rounded border border-black/20 px-3 py-2 outline-none transition focus:border-purple-500"
              />
            </div>

            <div>
              <label className="text-sm text-black/80">E-mail</label>
              <input
                type="email"
                placeholder="E-mail"
                className="mt-1 w-full rounded border border-black/20 px-3 py-2 outline-none transition focus:border-purple-500"
              />
            </div>

            <div>
              <label className="text-sm text-black/80">Assunto</label>
              <input
                type="text"
                placeholder="Assunto"
                className="mt-1 w-full rounded border border-black/20 px-3 py-2 outline-none transition focus:border-purple-500"
              />
            </div>

            <div>
              <label className="text-sm text-black/80">Mensagem</label>
              <textarea
                placeholder="Mensagem"
                rows={4}
                className="mt-1 w-full rounded border border-black/20 px-3 py-2 outline-none transition focus:border-purple-500"
              />
            </div>

            <button
              type="submit"
              className="cursor-pointer mt-4 w-full rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 py-3 font-semibold text-white transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
            >
              Enviar
            </button>

          </form>
        </div>
      </div>
    </section>
  );
}