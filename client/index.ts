import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../server";

const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:8000",
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
