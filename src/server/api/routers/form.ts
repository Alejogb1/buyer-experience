import { createProcedure } from "@trpc/server/dist/deprecated/internals/procedure";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { validationSchema } from '~/pages/opinar/index';

export const reactHookFormRouter = createTRPCRouter({
    add: publicProcedure
    .input(validationSchema)
    .mutation(async ({ input, ctx }) => {
        const id = Math.random()
            .toString(36)
            .replace(/[^a-z]+/g, '')
            .slice(0, 6);

        const review = await ctx.prisma.review.create({
            data: {
                id,
                ...input,
            },
          });
    
        return review
    }),
});
