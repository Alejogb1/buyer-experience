import { createTRPCRouter, publicProcedure } from "../trpc";

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
  get: publicProcedure
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
      console.log("executing product router get...")
      return products
    }),
})