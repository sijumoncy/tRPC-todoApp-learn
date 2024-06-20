import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { userRouter } from "./routers/user";
import { todoRouter } from "./routers/todo";
import { mergeRouters } from "./trpc";

// merge routes under same namespace. We can also use seperate namespace for category of routers like todo , user etc.
const appRouter = mergeRouters(userRouter, todoRouter);

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
