import { createTRPCRouter, publicProcedure } from "../trpc";
import { z } from "zod";

export const productRouter = createTRPCRouter({
  all: publicProcedure
    .query(async ({ ctx }) => {
      const products = await ctx.prisma.product.findMany({
        select: {
          id: true,
          name: true,
          categories: true,
          logo: true,
          description: true,
          rating: true,
          website_url: true
        }
      });
      return products
    }),
  getProductsByCategory: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ input, ctx }) => {
      const products = await ctx.prisma.category.findMany({
        where: { slug: input.slug },
        select: {
          products: {
            select: {
              id: true,
              name: true,
              logo: true,
              description: true,
              rating: true,
              website_url: true
            }
          }
        }
      });

      if (!products) {
        throw new Error(`Category with slug "${input.slug}" not found.`);
      }

      return products;
    })

})