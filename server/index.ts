import { publicProcedure, router } from "./trpc";
import { createTodoInputType, signUpInputType } from "./types/types";
import { createHTTPServer } from "@trpc/server/adapters/standalone";

const appRouter = router({
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

  signup: publicProcedure.input(signUpInputType).mutation(async (opts) => {
    const { email, password } = opts.input;
    //user exist check and db call to create user
    // create JWT Token here
    const token = "12345";
    return {
      token,
    };
  }),
});

/**
 * When you define a context on init , need to handle the context values here
 * The way to create contex differ on the adapter used - here it is standalone.
 * this function is similar to middleware in express or other framewroks
 */
const server = createHTTPServer({
  router: appRouter,
  createContext(opts) {
    let authHeader = opts.req.headers["authorization"];
    console.log({ authHeader });
    // make a call to JWT verify the token and return the userId
    return {
      userId: "12345",
    };
  },
});

server.listen(8000);

export type AppRouter = typeof appRouter;
