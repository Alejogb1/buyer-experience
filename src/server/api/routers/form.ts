import { createProcedure } from "@trpc/server/dist/deprecated/internals/procedure";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { validationSchema } from '~/pages/opinar/index';

export const reactHookFormRouter = createTRPCRouter({
    add: publicProcedure.input(validationSchema).mutation(({ input }) => {
        const id = Math.random()
            .toString(36)
            .replace(/[^a-z]+/g, '')
            .slice(0, 6);
        const item = {
            id,
            ...input,
        };
        return item;
    }),
});
