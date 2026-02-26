import { api } from "./api";
import { z } from "zod";
import { CaseApiItemSchema } from "@/schemas/case.schema";

type CaseApiItem = z.infer<typeof CaseApiItemSchema>;

const CasesArraySchema = z.array(CaseApiItemSchema);

export const getCases = async (): Promise<CaseApiItem[]> => {
  const { data } = await api.get("/cases");
   const payload = data?.data ?? data;
  return CasesArraySchema.parse(payload);
};

export const getFeaturedCases = async (): Promise<CaseApiItem[]> => {
  const res = await api.get(
    "/cases?isFeatured=true&_sort=orderFeatured&_page=1&_per_page=6"
  );

  console.log("data", res.data);

  // json-server v1+: pode vir { data: [...] } dependendo do setup
  const payload = (res.data?.data ?? res.data) as unknown;
  
  console.log("payload", payload);
  return CasesArraySchema.parse(payload);
};

export const getCaseBySlug = async (slug: string): Promise<CaseApiItem | null> => {
  const { data } = await api.get(`/cases?slug=${encodeURIComponent(slug)}`);
  const parsed = CasesArraySchema.parse(data);
  return parsed[0] ?? null;
};

export const getCasesByCategory = async (category: string): Promise<CaseApiItem[]> => {
  const { data } = await api.get(`/cases?category=${encodeURIComponent(category)}`);
  const payload = data?.data ?? data;
  return CasesArraySchema.parse(payload);
};

