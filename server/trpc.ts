import { initTRPC } from "@trpc/server";

// Global initialsation of tRPC instance
const t = initTRPC.create();

/**
 * exporting re usable helper and router function
 */
export const router = t.router;
export const publicProcedure = t.procedure;
