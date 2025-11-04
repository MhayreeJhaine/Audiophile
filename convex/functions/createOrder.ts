import { mutation } from "../_generated/server";
import { v } from "convex/values";

export const createOrder = mutation({
  args: {
    customer: v.object({
      name: v.string(),
      email: v.string(),
      phone: v.optional(v.string()),
    }),
    shipping: v.object({
      address: v.string(),
      city: v.string(),
      country: v.string(),
      postalCode: v.string(),
    }),
    items: v.array(
      v.object({
        id: v.string(),
        name: v.string(),
        price: v.number(),
        quantity: v.number(),
      })
    ),
    totals: v.object({
      subtotal: v.number(),
      shipping: v.number(),
      grandTotal: v.number(),
    }),
  },
  handler: async (ctx, args) => {
    const order = {
      ...args,
      status: "pending",
      createdAt: new Date().toISOString(),
    };
    const id = await ctx.db.insert("orders", order);
    return id;
  },
});
