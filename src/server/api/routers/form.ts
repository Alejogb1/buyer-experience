import { createProcedure } from "@trpc/server/dist/deprecated/internals/procedure";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { validationSchema } from '~/pages/opinar/index';

export const reactHookFormRouter = createTRPCRouter({
    add: publicProcedure
        .input(validationSchema)
        .mutation(async ({ input, ctx }) => {

            const review = await ctx.prisma.review.create({
                data: {
                    name: input.name,
                    email: input.email,
                    review_message: input.review_message,
                    item_name: input.item_name,
                    user_rating: input.user_rating
                },
            });
            return {
                status: 201,
                message: 'Review submitted successfully',
                review,
            };
        }),
});
