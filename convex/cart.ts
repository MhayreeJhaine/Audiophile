import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

// Get all cart items for a user
export const getCart = query({
  args: { userId: v.string() },
  handler: async (ctx, { userId }) => {
    return await ctx.db
      .query("cart")
      .filter((q) => q.eq(q.field("userId"), userId))
      .collect();
  },
});

// Add item to cart
export const addToCart = mutation({
  args: {
    userId: v.string(),
    productId: v.string(),
    name: v.string(),
    price: v.number(),
    image: v.string(),
    quantity: v.number(),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("cart")
      .filter((q) =>
        q.and(
          q.eq(q.field("userId"), args.userId),
          q.eq(q.field("productId"), args.productId)
        )
      )
      .first();

    if (existing) {
      await ctx.db.patch(existing._id, {
        quantity: existing.quantity + args.quantity,
      });
    } else {
      await ctx.db.insert("cart", { ...args });
    }
  },
});

// Increase quantity
export const increaseQuantity = mutation({
  args: { itemId: v.id("cart") },
  handler: async (ctx, { itemId }) => {
    const item = await ctx.db.get(itemId);
    if (!item) return;
    await ctx.db.patch(itemId, { quantity: item.quantity + 1 });
  },
});

// Decrease quantity
export const decreaseQuantity = mutation({
  args: { itemId: v.id("cart") },
  handler: async (ctx, { itemId }) => {
    const item = await ctx.db.get(itemId);
    if (!item) return;
    if (item.quantity > 1) {
      await ctx.db.patch(itemId, { quantity: item.quantity - 1 });
    } else {
      await ctx.db.delete(itemId);
    }
  },
});

// Clear cart
export const clearCart = mutation({
  args: { userId: v.string() },
  handler: async (ctx, { userId }) => {
    console.log("🧹 Clearing cart for:", userId);
    const items = await ctx.db
      .query("cart")
      .filter((q) => q.eq(q.field("userId"), userId))
      .collect();
    for (const item of items) {
      await ctx.db.delete(item._id);
    }
    console.log("✅ Cart cleared successfully");
  },
});
