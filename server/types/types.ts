import { z } from "zod";

export const createTodoInputType = z.object({
  title: z.string(),
  description: z.string(),
});

export const signUpInputType = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const signUpOutputType = z.object({
  token: z.string().min(3),
});
