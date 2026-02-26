import { z } from "zod";
import { CaseApiItemSchema } from "@/schemas/case.schema";

type CaseApiItem = z.infer<typeof CaseApiItemSchema>;
const CasesArraySchema = z.array(CaseApiItemSchema);

const DB_URL =
  "https://raw.githubusercontent.com/GustavoSantosRodrigues/base3-api/main/db.json";

type DbShape = { cases?: unknown };

async function loadDb(): Promise<DbShape> {
  const res = await fetch(DB_URL, { cache: "no-store" });
  if (!res.ok) throw new Error(`Failed to fetch db.json: ${res.status}`);
  return (await res.json()) as DbShape;
}

async function loadCases(): Promise<CaseApiItem[]> {
  const db = await loadDb();

  // seu db.json precisa ter { "cases": [...] }
  const casesUnknown = db.cases ?? [];
  return CasesArraySchema.parse(casesUnknown);
}

export const getCases = async (): Promise<CaseApiItem[]> => {
  return loadCases();
};

export const getFeaturedCases = async (): Promise<CaseApiItem[]> => {
  const cases = await loadCases();

  // equivalente ao: ?isFeatured=true&_sort=orderFeatured&_page=1&_per_page=6
  return cases
    .filter((c: any) => c.isFeatured === true)
    .sort((a: any, b: any) => (a.orderFeatured ?? 9999) - (b.orderFeatured ?? 9999))
    .slice(0, 6);
};

export const getCaseBySlug = async (
  slug: string
): Promise<CaseApiItem | null> => {
  const cases = await loadCases();
  return cases.find((c: any) => c.slug === slug) ?? null;
};

export const getCasesByCategory = async (
  category: string
): Promise<CaseApiItem[]> => {
  const cases = await loadCases();

  // se seu schema for categories: [{ key, label }]
  return cases.filter((c: any) =>
    c.categories?.some((cat: any) => cat.key === category)
  );
};