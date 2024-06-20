import { publicProcedure, router } from "../trpc";
import { signUpInputType, signUpOutputType } from "../types/types";

export const userRouter = router({
  signup: publicProcedure
    .input(signUpInputType)
    .output(signUpOutputType)
    .mutation(async (opts) => {
      const { email, password } = opts.input;
      //user exist check and db call to create user
      // create JWT Token here
      const token = "12345";
      return {
        token,
      };
    }),
});
