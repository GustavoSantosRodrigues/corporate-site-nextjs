import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faInstagram,
    faYoutube,
    faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

import { images } from "@/assets/images";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer className="bg-white pt-16 md:pb-12 pb-2">
                <div className="container mx-auto px-6">
                    <div className="mb-12 h-0.5 w-full bg-black" />

                    <div className="grid gap-10 md:grid-cols-2 items-start">
                        <div>
                            <Image src={images.logoBase3} alt="logo" />

                            <Link
                                href="/contact"
                                className="text-black font-ArtegraSans font-black text-xl leading-10 hover:underline transition-all duration-300"
                            >
                                Trabalhe Conosco
                            </Link>

                            <p className="font-poppins font-medium text-xl text-black leading-10">
                                2024 | Todos os direitos reservados
                            </p>
                            <div className="mt-6 flex gap-4">

                                <Link href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faLinkedin} className="text-black w-10 h-10 hover:text-blue-600 transition-all duration-300 cursor-pointer" />
                                </Link>

                                <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} className="text-black w-10 h-10 hover:text-pink-600 transition-all duration-300 cursor-pointer" />
                                </Link>

                                <Link href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faYoutube} className="text-black w-10 h-10 hover:text-red-600 transition-all duration-300 cursor-pointer" />
                                </Link>

                            </div>
                        </div>
                        <div className="md:text-right">
                            <h3 className="font-ArtegraSans font-black md:text-2xl text-xl text-black leading-10 xl:ml-8 xl:mt-0 mt-5">Fale com BASE3</h3>

                            <a target="_blank" rel="noopener noreferrer" className="mt-4 flex items-start justify-start gap-2 md:justify-end" href="https://www.google.com/maps/dir//Rua+Dona+Rosa+de+Gusm%C3%A3o,+973+-+casa+-+sala+01+-+Jardim+Chapad%C3%A3o,+Campinas+-+SP,+13070-187/@-22.8845901,-47.155626,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x94c8c617520f82af:0x84377d554f3141ab!2m2!1d-47.0732244!2d-22.8846113?entry=ttu">
                                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-black w-10 h-10 hover:text-green-600 transition-all duration-300 cursor-pointer" />
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

            <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 shadow-lg transition hover:scale-110"
            >
                <FontAwesomeIcon icon={faWhatsapp} className="text-white w-10 h-10 hover:text-black transition-all duration-300 cursor-pointer" />
            </a>
        </>
    );
}
