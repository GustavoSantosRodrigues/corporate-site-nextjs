import { notFound } from "next/navigation";
import { getCaseBySlug, getCases } from "@/services/casesService";

import CaseHero from "./_components/CaseHero";
import CaseOverview from "./_components/CaseOverview";
import CaseChallengeSolution from "./_components/CaseChallengeSolution";
import CaseBigGallery from "./_components/CaseBigGallery";
import RelatedCases from "./_components/RelatedCases";

export default async function CaseDetail({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const item = await getCaseBySlug(slug);
    if (!item) return notFound();

    const overview = item.sections?.find(
        (s): s is { type: "overview"; chips?: string[]; bullets?: string[]; image?: string } =>
            s.type === "overview"
    );

    const triple = item.sections?.find(
        (s): s is { type: "triple"; items: { title: string; text: string; icon?: string }[]; bigTitle?: string } =>
            s.type === "triple"
    );
    const brandSwiper = item.swipers?.brand;

    const all = await getCases();
    const related = all.filter((c: any) => c.slug !== item.slug).slice(0, 3);

    return (
        <section>
            <CaseHero
                banner={item.hero?.bannerImage ?? "/images/fallback-banner.png"}
                title={item.hero?.title ?? item.card.title}
                subtitle={item.hero?.highlight ?? item.card.subtitle ?? ""}
            />

            <CaseOverview
                title={item.categories?.[0]?.label ?? "CASE"}
                highlight={item.card?.subtitle ?? ""}
                bullets={overview?.bullets ?? []}
                sideImage={overview?.image ?? "/images/fallback-side.png"}
                tags={overview?.chips ?? []}
            />

            <CaseChallengeSolution items={triple?.items ?? []} />
            {brandSwiper && (
                <CaseBigGallery title={brandSwiper.title} items={brandSwiper.items} />
            )}

            <RelatedCases cases={related} />
        </section>
    );
}