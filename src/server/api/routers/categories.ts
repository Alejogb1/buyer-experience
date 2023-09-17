import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";

export const categoryRouter = createTRPCRouter({
  all: publicProcedure
    .query(async ({ ctx }) => {
      const categories = await ctx.prisma.category.findMany({
        select: {
          id: true,
          name: true,
          slug: true,
          products: true,
        }
      });
      return categories
    }),
  get: publicProcedure
    .query(async ({ ctx }) => {
      const categories = await ctx.prisma.category.findMany({
        select: {
          id: true,
          name: true,
          slug: true,
          products: true,
        }
      });
      return categories
    }),
  getAllCategorySlugs: publicProcedure
    .query(async ({ ctx }) => {
      const slugs = await ctx.prisma.category.findMany({
        select: {
          slug: true,
          id: true,
        }
      });
      return slugs
    }),
  getCategoryBySlug: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ input, ctx }) => {
      const category = await ctx.prisma.category.findMany({
        where: {
          slug: input.slug
        },
      })
      return category;
    }),

})