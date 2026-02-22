import Image from "next/image";
import { Linkedin, Instagram, Youtube, MapPin } from "lucide-react";
import { images } from "@/app/assets/images";

export default function Footer() {
    return (
        <>
            {/* FOOTER */}
            <footer className="bg-white pt-16 pb-12">
                <div className="container mx-auto px-6">

                    {/* linha superior */}
                    <div className="mb-12 h-[2px] w-full bg-black" />

                    <div className="grid gap-10 md:grid-cols-2 items-start">

                        {/* ESQUERDA */}
                        <div>
                            <Image src={images.logoBase3} alt="logo" />

                            <p className="text-black font-ArtegraSans font-black text-xl leading-10 hover:underline transition-all duration-300">Trabalhe Conosco</p>

                            <p className="font-poppins font-medium text-xl text-black leading-10">
                                2024 | Todos os direitos reservados
                            </p>

                            {/* redes sociais */}
                            <div className="mt-6 flex gap-4">
                                <SocialIcon>
                                    <Linkedin size={20} />
                                </SocialIcon>

                                <SocialIcon>
                                    <Instagram size={20} />
                                </SocialIcon>

                                <SocialIcon>
                                    <Youtube size={20} />
                                </SocialIcon>
                            </div>
                        </div>

                        {/* DIREITA */}
                        <div className="md:text-right">
                            <h3 className="font-ArtegraSans font-black md:text-2xl text-xl text-black leading-10 xl:ml-8 xl:mt-0 mt-5">Fale com BASE3</h3>

                            <a target="_blank" rel="noopener noreferrer" className="mt-4 flex items-start justify-start gap-2 md:justify-end" href="https://www.google.com/maps/dir//Rua+Dona+Rosa+de+Gusm%C3%A3o,+973+-+casa+-+sala+01+-+Jardim+Chapad%C3%A3o,+Campinas+-+SP,+13070-187/@-22.8845901,-47.155626,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x94c8c617520f82af:0x84377d554f3141ab!2m2!1d-47.0732244!2d-22.8846113?entry=ttu">
                                <MapPin className="mt-1" size={18} />
                                <span>
                                    SP - Rua Dona Rosa de Gusmão,
                                    <br />
                                    973 Jardim Chapadão, Campinas
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>

            {/* BOTÃO WHATSAPP FIXO */}
            <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 shadow-lg transition hover:scale-110"
            >
                <Image
                    src="/whatsapp-icon.svg" // coloque seu ícone aqui
                    alt="WhatsApp"
                    width={32}
                    height={32}
                />
            </a>
        </>
    );
}

/* COMPONENTE DO ÍCONE SOCIAL */
function SocialIcon({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-black text-white transition hover:scale-110">
            {children}
        </div>
    );
}