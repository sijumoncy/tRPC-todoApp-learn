import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../server";

/**
 * Here demo how to add headers in the request like auth HEADER
 */
const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:8000",
      async headers() {
        return {
          Authorization: "Bearer 12345", // get from localstorage or something
        };
      },
    }),
  ],
});

async function main() {
  // Invoke the server api from client side
  const response = await trpc.createTodo.mutate({
    title: "todo1",
    description: "todo 1 for test",
  });

  console.log("response : ", response);
}
