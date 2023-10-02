import { createTRPCRouter } from "~/server/api/trpc";
import { categoryRouter } from "~/server/api/routers/categories";
import { productRouter } from "~/server/api/routers/products";
import { reactHookFormRouter } from "~/server/api/routers/form"
import { initTRPC, TRPCError } from '@trpc/server';

const t = initTRPC.create();

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  category: categoryRouter,
  product: productRouter,
  form: reactHookFormRouter,
  hello: t.procedure.query(() => {
    throw new TRPCError({
      code: 'INTERNAL_SERVER_ERROR',
      message: 'An unexpected error occurred, please try again later.',
      // optional: pass the original error to retain stack trace
      cause: theError,
    });
  }),

});

// export type definition of API
export type AppRouter = typeof appRouter;
