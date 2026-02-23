// "use client";

import { images } from "@/assets/images";
import { Flag, Lightbulb } from "lucide-react";
import CaseHero from "./_components/CaseHero";
import CaseOverview from "./_components/CaseOverview";
import CaseChallengeSolution from "./_components/CaseChallengeSolution";
import CaseBigGallery from "./_components/CaseBigGallery";
import CaseCard from "@/components/CaseCard";

import type { StaticImageData } from "next/image";
import RelatedCases from "./_components/RelatedCases";

export default async function CaseDetail
    ({ params

    }:
        {
            params: Promise<{ id: string }>;
        }) {
    const { id } = await params;

    const data = {
        title: "MICHELIN CONNECTED FLEET",
        subtitle: "Transposul 2025",
        banner: images.michelinBanner,
        overviewTitle: "EVENTO",
        overviewHighlight: "TRANSPOSUL 2025",
        description:
            "Gestão completa da participação da Michelin Connected Fleet em um dos maiores eventos do setor de transporte e logística da América do Sul.",
        bullets: [
            "Longas para estande",
            "Totens com vídeos interativos",
            "Conteúdo para tablets",
            "Gestão do evento",
            "Criação de materiais",
        ],
        sideImage: images.maoCase,
    };

    const items = [
        {
            title: "DESAFIO",
            text:
                "A Michelin Connected Fleet precisava marcar presença de forma estratégica na Transposul 2025...",
            icon: <Flag className="h-12 w-12 text-greenPaths-100" />,
        },
        {
            title: "SOLUÇÃO",
            text:
                "Da concepção à execução, cuidamos de toda a participação da marca no evento...",
            icon: <Lightbulb className="h-12 w-12 text-greenPaths-100" />,
        },
        {
            title: "SOLUÇÃO",
            text:
                "Da concepção à execução, cuidamos de toda a participação da marca no evento...",
            icon: <Lightbulb className="h-12 w-12 text-greenPaths-100" />,
        },
        {
            title: "SOLUÇÃO",
            text:
                "Da concepção à execução, cuidamos de toda a participação da marca no evento...",
            icon: <Lightbulb className="h-12 w-12 text-greenPaths-100" />,
        },
    ];

    const gallery = [
        { src: images.bannerMichelinConnected, alt: "Estande - 01" },
        { src: images.bannerMichelinConnected, alt: "Estande - 02" },
        { src: images.bannerMichelinConnected, alt: "Estande - 03" },
    ];

    type CaseItem = {
        id: string;
        title: string;
        subtitle?: string;
        description?: string;
        image: StaticImageData;
    };

    const cases: CaseItem[] = [
        {
            id: "michelin",
            title: "Michelin connected fleet fenatran 2024",
            subtitle: "TRANSPOSUL 2025",
            description: "Estande, ativações, cobertura e gestão",
            image: images.michelinCard,
        },
        {
            id: "3m",
            title: "3M | Ambientação CIC",
            subtitle: "2025",
            description: "Estande, ativações, cobertura e gestão",
            image: images.card3m,
        },
        {
            id: "cipatex",
            title: "Cipatex | Ambientação CIC",
            subtitle: "2025",
            description: "Conceito de coleção",
            image: images.cipatexCard,
        },
        {
            id: "fagron",
            title: "Fagron | We for her",
            subtitle: "2025",
            description: "Campanha de reposicionamento",
            image: images.fagronCard,
        },
        {
            id: "oxitec",
            title: "Oxitec | Spodoptera do bem",
            subtitle: "2025",
            description: "Branding/Design de embalagem",
            image: images.oxitecCard,
        },
    ];

   const relatedCases = cases.filter((c) => c.id !== id);

    return (
        <section>
            <CaseHero banner={data.banner} title={data.title} subtitle={data.subtitle} />
            <CaseOverview
                title={data.overviewTitle}
                highlight={data.overviewHighlight}
                description={data.description}
                bullets={data.bullets}
                sideImage={data.sideImage}
            />
            <CaseChallengeSolution items={items} />
            <CaseBigGallery images={gallery} />
            <RelatedCases cases={relatedCases} />
        </section>
    );
}