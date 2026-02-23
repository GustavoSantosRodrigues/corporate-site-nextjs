"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Search, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { images } from "@/assets/images";
import Image from "next/image";

export default function Header() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, []);

    return (
        <>
            <div className="h-[100px] 3xl:h-[129px]" />
                <header className="fixed top-0 left-0 z-50 w-full bg-white/90 shadow-md backdrop-blur">
                    <div className="container">
                        <div className="flex items-center justify-between py-10 md:py-10">

                            <Link href="/" className="flex items-center">
                                <Image
                                    src={images.logoBase3}
                                    alt="Base3"
                                    className="h-8 md:h-12 w-auto object-contain"
                                    priority
                                />
                            </Link>


                            {/* Desktop */}
                            <div className="hidden md:flex items-center gap-14">
                                <nav className="flex items-center gap-12 text-xl font-medium text-black">
                                    <Link
                                        href="/cases"
                                        className="inline-block transition-transform transition-colors duration-300 ease-out hover:scale-105 hover:text-purplePaths-100"
                                    >
                                        Cases
                                    </Link>

                                    <Link
                                        href="/sobre"
                                        className="inline-block transition-transform transition-colors duration-300 ease-out hover:scale-105 hover:text-purplePaths-100"
                                    >
                                        Sobre
                                    </Link>

                                    <Link
                                        href="/contatos"
                                        className="inline-block transition-transform transition-colors duration-300 ease-out hover:scale-105 hover:text-purplePaths-100"
                                    >
                                        Contatos
                                    </Link>
                                </nav>

                                <div className="flex items-center gap-3 border-b border-black pb-2">
                                    <Search size={18} className="shrink-0" />
                                    <input
                                        type="text"
                                        placeholder="Pesquisar"
                                        className="w-64 bg-transparent text-base outline-none placeholder:text-black"
                                    />
                                </div>
                            </div>

                            {/* Mobile */}
                            <div className="md:hidden flex items-center gap-6">
                                <button
                                    type="button"
                                    className="flex items-center gap-3 border-b border-black pb-2"
                                    aria-label="Pesquisar"
                                >
                                    <Search size={20} />
                                    <span className="text-base font-medium">Pesquisar</span>
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setOpen(true)}
                                    aria-label="Abrir menu"
                                >
                                    <Menu size={28} />
                                </button>
                            </div>

                        </div>
                    </div>

                    {/* Drawer Mobile */}
                    <AnimatePresence>
                        {open && (
                            <>
                                {/* Overlay */}
                                <motion.button
                                    type="button"
                                    aria-label="Fechar menu"
                                    className="fixed inset-0 z-40 bg-black/50"
                                    onClick={() => setOpen(false)}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                />

                                {/* Painel */}
                                <motion.aside
                                    className="fixed right-0 top-0 z-50 h-dvh w-[78%] max-w-[360px] bg-white shadow-2xl"
                                    initial={{ x: "100%" }}
                                    animate={{ x: 0 }}
                                    exit={{ x: "100%" }}
                                    transition={{ type: "tween", duration: 0.25 }}
                                >
                                    <div className="flex items-start justify-between px-8 pt-10">
                                        <span className="text-sm font-medium text-black/50">
                                            {/* opcional: título */}
                                        </span>

                                        <button
                                            type="button"
                                            onClick={() => setOpen(false)}
                                            aria-label="Fechar menu"
                                        >
                                            <X size={28} />
                                        </button>
                                    </div>

                                    <nav className="px-8 pt-10">
                                        <ul className="space-y-10 text-2xl font-medium text-black">
                                            <li>
                                                <Link href="/cases" onClick={() => setOpen(false)}>
                                                    Cases
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/sobre" onClick={() => setOpen(false)}>
                                                    Sobre
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/contatos" onClick={() => setOpen(false)}>
                                                    Contatos
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </motion.aside>
                            </>
                        )}
                    </AnimatePresence>
                </header>
            {/* </div> */}
        </>
    );
}
