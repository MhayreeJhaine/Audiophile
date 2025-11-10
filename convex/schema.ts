import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  cart: defineTable({
    userId: v.string(),
    productId: v.string(),
    name: v.string(),
    price: v.number(),
    image: v.string(),
    quantity: v.number(),
  }),
});
