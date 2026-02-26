import { z } from "zod";


export const CategorySchema = z.object({
  key: z.string(),
  label: z.string(),
  images_category: z.string(),
});

export const CardSchema = z.object({
  title: z.string(),
  subtitle: z.string().optional(),
  description: z.string().optional(),
  image: z.string(),
});

export const HeroSchema = z.object({
  bannerImage: z.string(),
  title: z.string(),
  highlight: z.string(),
  description: z.string(),
});

export const OverviewSectionSchema = z.object({
  type: z.literal("overview"),
  chips: z.array(z.string()).optional(),
  bullets: z.array(z.string()).optional(),
  image: z.string().optional(),
});

export const TripleItemSchema = z.object({
  icon: z.string().optional(),
  title: z.string(),
  text: z.string(),
});

export const TripleSectionSchema = z.object({
  type: z.literal("triple"),
  items: z.array(TripleItemSchema),
  bigTitle: z.string().optional(),
});

export const SectionSchema = z.union([OverviewSectionSchema, TripleSectionSchema]);

export const SwiperItemSchema = z.object({
  title: z.string(),
  image: z.string(),
});

export const SwiperSchema = z.object({
  title: z.string(),
  items: z.array(SwiperItemSchema),
});

export const SwipersSchema = z
  .object({
    brand: SwiperSchema.optional(),
  })
  .optional();

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
  hero: HeroSchema.optional(),
  sections: z.array(SectionSchema).optional(),
  swipers: SwipersSchema,
});


export type CaseApiItem = z.infer<typeof CaseApiItemSchema>;