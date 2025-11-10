// import { defineSchema, defineTable } from "convex/server";
// import { v } from "convex/values";

// export default defineSchema({
//   cart: defineTable({
//     userId: v.string(),
//     productId: v.string(),
//     name: v.string(),
//     price: v.number(),
//     image: v.string(),
//     quantity: v.number(),
//   }),
// });

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

  orders: defineTable({
    userId: v.string(),
    orderId: v.string(),
    user: v.string(),
    email: v.string(),
    address: v.string(),
    city: v.string(),
    zipcode: v.string(),
    country: v.string(),
    cartItems: v.array(
      v.object({
        name: v.string(),
        quantity: v.number(),
        price: v.number(),
      })
    ),
    total: v.number(),
    shipping: v.number(),
    vat: v.number(),
    grandTotal: v.number(),
    createdAt: v.string(),
  }),
});
