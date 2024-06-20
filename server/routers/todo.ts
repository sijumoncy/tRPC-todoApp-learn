import { publicProcedure, router } from "../trpc";
import { createTodoInputType } from "../types/types";

export const todoRouter = router({
  // create todo is restricted to user with valid token ( to implement auth with tRPC )
  createTodo: publicProcedure
    .input(createTodoInputType)
    .mutation(async (opts) => {
      const { title, description } = opts.input;
      // Here I can access the context value init and set
      const userId = opts.ctx.userId;
      // db call here
      return {
        id: "1",
      };
    }),
});
