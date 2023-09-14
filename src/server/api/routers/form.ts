import { createProcedure } from "@trpc/server/dist/deprecated/internals/procedure";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { validationSchema } from '~/pages/opinar/index';
import { validationSchemaProvider } from "~/pages/publicitar";
export const reactHookFormRouter = createTRPCRouter({
    addReview: publicProcedure
        .input(validationSchema)
        .mutation(async ({ input, ctx }) => {

            const review = await ctx.prisma.review.create({
                data: {
                    ...input
                },
            });
            return {
                status: 201,
                message: 'Review submitted successfully',
                review,
            };
        }),
    addProvider: publicProcedure
        .input(validationSchemaProvider)
        .mutation(async ({ input, ctx }) => {
            const providerInfo = await ctx.prisma.provider.create({
                data: {
                    ...input
                }
            });
            return {
                status: 201,
                message: 'Advertise form submitted succesfully',
                providerInfo,
            }
        })
});
