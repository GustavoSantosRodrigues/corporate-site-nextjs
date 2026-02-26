import { z } from "zod";

export const CaseCardSchema = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
  description: z.string().optional(),
  image: z.string(), 
});

export const CaseApiItemSchema = z.object({
  id: z.number(),
  slug: z.string(),
  categories: z.array(z.object({
    key: z.string(),
    label: z.string(),
    images_category: z.string(),
  })),
  isFeatured: z.boolean(),
  orderFeatured: z.number().optional(),
  card: CaseCardSchema,
});

export type CaseApiItem = z.infer<typeof CaseApiItemSchema>;