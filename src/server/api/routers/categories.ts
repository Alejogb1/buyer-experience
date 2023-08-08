import { createTRPCRouter, publicProcedure } from "../trpc";
import z from "zod"

export const categoryRouter = createTRPCRouter({
    all: publicProcedure
    .query(async ({ ctx }) => {
        const categories = await ctx.prisma.category.findMany({
          select: {
            id: true,
            name: true,
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
          }
        });
        console.log("executing category router get...")
        return categories
      }),
})