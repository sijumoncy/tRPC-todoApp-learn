import { initTRPC } from "@trpc/server";

type extendContex = {
    userId : string
    // here pass global db var - recommended
}

// Global initialsation of tRPC instance
/**
 * on init define the types can come in the context
 * adding context - the context can be altered with what all need to get in the ctx of each request.
 * Similar to the req object modification in middleware of express to pass userdata
 */
const t = initTRPC.context<extendContex>().create();

/**
 * exporting re usable helper and router function
 */
export const router = t.router;
export const publicProcedure = t.procedure;
export const mergeRouters = t.mergeRouters;
