import { publicProcedure, router } from "./trpc";
import { createTodoInputType } from "./types/types";

const appRouter = router({
  createTodo: publicProcedure
    .input(createTodoInputType)
    .mutation(async (opts) => {
      const { title, description } = opts.input;
      // db call here
      return {
        id: "1",
      };
    }),
});

export type AppRouter = typeof appRouter;
