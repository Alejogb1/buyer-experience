import { createTRPCRouter } from "~/server/api/trpc";
import { categoryRouter } from "~/server/api/routers/categories";
import { productRouter } from "~/server/api/routers/products";
import { reactHookFormRouter } from "~/server/api/routers/form"
/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  category: categoryRouter,
  product: productRouter,
  form: reactHookFormRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
