import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const unihackfestPlan = defineCollection({
  loader: glob({ base: "./src/content/unihackfest-plan", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    order: z.number().int().nonnegative(),
  }),
});

const unihackfestPlanVi = defineCollection({
  loader: glob({ base: "./src/content/unihackfest-plan-vi", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    order: z.number().int().nonnegative(),
  }),
});

export const collections = {
  unihackfestPlan,
  unihackfestPlanVi,
};
