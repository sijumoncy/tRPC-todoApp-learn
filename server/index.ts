import { publicProcedure, router } from "./trpc";
import { createTodoInputType } from "./types/types";
import { createHTTPServer } from "@trpc/server/adapters/standalone";

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

const server = createHTTPServer({
  router: appRouter,
});

server.listen(8000);

export type AppRouter = typeof appRouter;
