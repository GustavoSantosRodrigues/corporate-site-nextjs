"use client";

import Image from "next/image";
import { images } from "@/assets/images";
import { useState } from "react";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import TextField from "@/components/TextField";


const ContactSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome"),
  email: z.string().trim().email("E-mail inválido"),
  subject: z
    .string()
    .trim()
    .min(3, "Informe um assunto")
    .max(80, "Assunto muito longo (máx. 80)"),
  message: z
    .string()
    .trim()
    .min(10, "Mensagem muito curta (mín. 10 caracteres)")
    .max(1000, "Mensagem muito longa (máx. 1000)"),
});

type ContactFormData = z.infer<typeof ContactSchema>;

export default function ContactSection() {
  const [sent, setSent] = useState(false);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (data: ContactFormData) => {
    setSent(false);
    await new Promise((r) => setTimeout(r, 1200));
    console.log("FAKE SUBMIT:", data);

    setSent(true);
    reset();
    setTimeout(() => setSent(false), 3000);
  };

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
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <TextField<ContactFormData>
              name="name"
              control={control}
              label="Nome"
              placeholder="Nome"
              error={errors.name?.message}
            />

            <TextField<ContactFormData>
              name="email"
              control={control}
              label="E-mail"
              placeholder="E-mail"
              type="email"
              inputMode="email"
              autoCapitalize="none"
              error={errors.email?.message}
            />

            <TextField<ContactFormData>
              name="subject"
              control={control}
              label="Assunto"
              placeholder="Assunto"
              error={errors.subject?.message}
            />

            <TextField<ContactFormData>
              name="message"
              control={control}
              label="Mensagem"
              placeholder="Mensagem"
              as="textarea"
              rows={4}
              error={errors.message?.message}
            />

            {sent && (
              <div className="rounded-md border border-green-200 bg-green-50 px-3 py-2 text-sm text-green-700">
                Mensagem enviada (simulação) ✅
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="cursor-pointer mt-4 w-full rounded-full bg-gradient-to-r from-purple-600 to-fuchsia-600 py-3 font-semibold text-white transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}