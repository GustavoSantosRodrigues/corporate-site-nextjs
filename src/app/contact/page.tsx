

import Image from "next/image";
import { images } from "@/assets/images";

export default function Contact() {
    return (
        <>
            <section className="relative w-full h-[40vh] lg:h-screen overflow-hidden bg-black">
                <Image
                    src={images.bannerContato}
                    alt="Banner Contato"
                    fill
                    priority
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-black/40 pt-20" />
                <div className="relative z-10 h-full container mx-auto px-6 flex flex-col items-center justify-center text-center">
                    <h1 className="text-greenPaths-100 font-black uppercase 3xl:text-9xl xl:text-8xl md:text-6xl text-4xl">
                        Contato
                    </h1>

                    <p className="mt-6 text-white font-poppins 3xl:text-4xl xl:text-3xl md:text-xl text-base max-w-4xl ">
                        Por aqui, estamos prontos para conversar com você quando precisar.
                        É só chamar que respondemos rápido e direto, do jeito que você merece.
                    </p>
                </div>
            </section>

            <section className="bg-whites py-20">
                <div className="container mx-auto px-6 flex flex-col lg:flex-row items-start gap-16">

                    <div className="w-full lg:w-6/12">
                        <h2 className="font-black uppercase leading-none
                     3xl:text-8xl xl:text-7xl md:text-6xl text-4xl">
                            Vamos construir <br />
                            <span className="text-purplePaths-100">
                                algo incrível <br />
                                juntos?
                            </span>
                        </h2>

                        <p className="mt-8 text-black font-semibold
                            3xl:text-3xl xl:text-2xl md:text-xl text-lg
                            max-w-lg leading-relaxed">
                            Converse com a gente e dê o primeiro passo na evolução
                            da sua comunicação.
                        </p>
                    </div>

                    <div className="w-full lg:w-6/12 bg-white p-8 md:p-12 rounded-3xl shadow-xl">
                        <form className="space-y-6">

                            <div>
                                <label className="block mb-2 font-semibold text-black">
                                    Nome
                                </label>
                                <input
                                    type="text"
                                    className="w-full bg-gray-100 rounded-xl p-4 outline-none focus:ring-2 focus:ring-purplePaths-100"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 font-semibold text-black">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="w-full bg-gray-100 rounded-xl p-4 outline-none focus:ring-2 focus:ring-purplePaths-100"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 font-semibold text-black">
                                    Telefone/WhatsApp
                                </label>
                                <input
                                    type="text"
                                    className="w-full bg-gray-100 rounded-xl p-4 outline-none focus:ring-2 focus:ring-purplePaths-100"
                                />
                            </div>

                            <div>
                                <label className="block mb-2 font-semibold text-black">
                                    Mensagem
                                </label>
                                <textarea
                                    rows={5}
                                    className="w-full bg-gray-100 rounded-xl p-4 outline-none focus:ring-2 focus:ring-purplePaths-100"
                                />
                            </div>

                            <button
                                type="submit"
                                className="mt-4 px-10 py-4 rounded-full font-bold text-white
                                bg-gradient-to-r from-purple-600 to-purple-400
                                hover:opacity-90 transition"
                            >
                                Enviar
                            </button>

                        </form>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="flex flex-col items-center justify-center bg-white">
                        <div className="w-full md:h-[935px] h-[300px] overflow-hidden rounded-xl shadow-lg">
                            <iframe className="w-full h-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.779259941227!2d-47.0732244!3d-22.8846113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c8c617520f82af%3A0x84377d554f3141ab!2zQmFzZTMgQ29tdW5pY2HDp8Ojbw!5e0!3m2!1spt-BR!2sbr!4v1742399150675!5m2!1spt-BR!2sbr" width="600" height="450" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}