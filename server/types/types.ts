import { z } from "zod";

export const createTodoInputType = z.object({
  title: z.string(),
  description: z.string(),
});
