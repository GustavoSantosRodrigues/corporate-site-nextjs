import type { CaseApiItem } from "@/schemas/case.schema";

const norm = (s: string) => s.trim().toLowerCase();

export function searchCases(cases: CaseApiItem[], query: string) {
  const q = norm(query);
  if (!q) return [];

  return cases.filter((c) => {
    const title = c.card.title;
    const subtitle = c.card.subtitle ?? "";
    const desc = c.card.description ?? "";
    const hero = c.hero?.description ?? "";
    const cats = (c.categories ?? []).map((cat) => `${cat.key} ${cat.label}`).join(" ");

    return [title, subtitle, desc, hero, cats].some((v) => norm(v).includes(q));
  });
}