// import { mutation } from "../convex/_generated/server";
// import { sendConfirmationEmail } from "../src/lib/confirmationEmail";

// interface CartItem {
//   name: string;
//   quantity: number;
//   price: number;
// }

// export const placeOrder = mutation(
//   async ({ db }, { formData, cartItems, totals }) => {
//     // Generate unique order ID like ODR123456
//     const timestamp = Date.now();
//     const orderId = `ODR${timestamp}`;

//     // Optional: save order in your Convex DB
//     await db.collection("orders").insert({
//       orderId,
//       user: formData.name,
//       email: formData.email,
//       address: formData.address,
//       city: formData.city,
//       zipcode: formData.zipcode,
//       country: formData.country,
//       cartItems,
//       total: totals.total,
//       shipping: totals.shipping,
//       vat: totals.vat,
//       grandTotal: totals.grandTotal,
//       createdAt: new Date(),
//     });

//     // Send confirmation email
//     await sendConfirmationEmail({
//       orderId,
//       name: formData.name,
//       email: formData.email,
//       address: formData.address,
//       city: formData.city,
//       zipcode: formData.zipcode,
//       country: formData.country,
//       cartItems,
//       total: totals.total,
//       shipping: totals.shipping,
//       vat: totals.vat,
//       grandTotal: totals.grandTotal,
//     });

//     return { orderId };
//   }
// );
