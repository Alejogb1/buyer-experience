import { createTRPCRouter, publicProcedure } from "../trpc";
import * as trpc from '@trpc/server';
import { z } from "zod";


export const categoryRouter = createTRPCRouter({

    all: publicProcedure
    .input(        
        z.object({
            categoryTitle: z.string()
    }))
    .query(async ({ ctx, input }) => {
        const { categoryTitle } = input
        const posts = await ctx.prisma.category.findMany({
            select: {
                id: true,
                name: true,
                products: true,
            },
            where:{
              title: {
                contains: categoryTitle ? categoryTitle : undefined,
                mode: 'insensitive'
              }
                },
                orderBy: {
                createdAt: "desc",
            },
        });
    
        return posts
      }),
})