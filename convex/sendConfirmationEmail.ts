// // // import { v } from "convex/values";
// // // import { action } from "./_generated/server";
// // // import { Resend } from "resend";

// // // export const sendConfirmationEmail = action({
// // //   args: {
// // //     orderId: v.string(),
// // //     name: v.string(),
// // //     email: v.string(),
// // //     address: v.string(),
// // //     city: v.string(),
// // //     zipcode: v.string(),
// // //     country: v.string(),
// // //     cartItems: v.array(
// // //       v.object({
// // //         name: v.string(),
// // //         quantity: v.number(),
// // //         price: v.number(),
// // //       })
// // //     ),
// // //     total: v.number(),
// // //     shipping: v.number(),
// // //     vat: v.number(),
// // //     grandTotal: v.number(),
// // //   },
// // //   handler: async (_, args) => {
// // //     const resend = new Resend(process.env.RESEND_API_KEY!);

// // //     const itemsHtml = args.cartItems
// // //       .map(
// // //         (item) => `
// // //         <tr>
// // //           <td style="padding: 8px; border-bottom: 1px solid #ddd;">${item.name}</td>
// // //           <td style="padding: 8px; border-bottom: 1px solid #ddd;">x${item.quantity}</td>
// // //           <td style="padding: 8px; border-bottom: 1px solid #ddd;">$${item.price.toLocaleString()}</td>
// // //         </tr>`
// // //       )
// // //       .join("");

// // //     const html = `
// // //       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px;">
// // //         <h2 style="color:#D87D4A;">Thank you for your order, ${args.name}!</h2>
// // //         <p>Your order <strong>#${args.orderId}</strong> has been confirmed.</p>

// // //         <h3>Order Summary</h3>
// // //         <table style="width:100%; border-collapse: collapse;">
// // //           <thead>
// // //             <tr>
// // //               <th style="text-align:left; padding:8px; border-bottom:1px solid #ddd;">Product</th>
// // //               <th style="text-align:center; padding:8px; border-bottom:1px solid #ddd;">Qty</th>
// // //               <th style="text-align:right; padding:8px; border-bottom:1px solid #ddd;">Price</th>
// // //             </tr>
// // //           </thead>
// // //           <tbody>${itemsHtml}</tbody>
// // //         </table>

// // //         <h3>Shipping Details</h3>
// // //         <p>${args.address}, ${args.city}, ${args.zipcode}, ${args.country}</p>

// // //         <p><strong>Grand Total:</strong> $${args.grandTotal.toLocaleString()}</p>

// // //         <p>If you have any questions, contact our support at
// // //           <a href="mailto:support@audiophile.com">support@audiophile.com</a>.
// // //         </p>

// // //         <a href="https://audiophile.com/orders/${args.orderId}"
// // //           style="display:inline-block; margin-top:20px; padding:12px 24px; background-color:#D87D4A; color:white; text-decoration:none; border-radius:6px;">
// // //           View your order
// // //         </a>
// // //       </div>`;

// // //     await resend.emails.send({
// // //       from: "orders@audiophile.com",
// // //       to: args.email,
// // //       subject: `Order Confirmation - #${args.orderId}`,
// // //       html,
// // //     });

// // //     return { success: true };
// // //   },
// // // });

// // import { action } from "./_generated/server";
// // import { v } from "convex/values";
// // import { Resend } from "resend";
// // import { clearCart } from "./cart"; // import your clearCart mutation

// // // Make sure RESEND_API_KEY is set in your Convex environment
// // const resend = new Resend(process.env.RESEND_API_KEY!);

// // export const sendConfirmationEmail = action({
// //   args: {
// //     userId: v.string(), // for clearing cart
// //     orderId: v.string(),
// //     name: v.string(),
// //     email: v.string(),
// //     address: v.string(),
// //     city: v.string(),
// //     zipcode: v.string(),
// //     country: v.string(),
// //     cartItems: v.array(
// //       v.object({
// //         name: v.string(),
// //         quantity: v.number(),
// //         price: v.number(),
// //       })
// //     ),
// //     total: v.number(),
// //     shipping: v.number(),
// //     vat: v.number(),
// //     grandTotal: v.number(),
// //   },
// //   handler: async (ctx, args) => {
// //     // 1️⃣ Build the HTML email content
// //     const itemsHtml = args.cartItems
// //       .map(
// //         (item) => `
// //       <tr>
// //         <td style="padding:8px; border-bottom:1px solid #ddd;">${item.name}</td>
// //         <td style="padding:8px; border-bottom:1px solid #ddd; text-align:center;">x${item.quantity}</td>
// //         <td style="padding:8px; border-bottom:1px solid #ddd; text-align:right;">$${item.price.toLocaleString()}</td>
// //       </tr>`
// //       )
// //       .join("");

// //     const html = `
// //       <div style="font-family: Arial, sans-serif; max-width: 600px; margin:auto; padding:20px;">
// //         <h2 style="color:#D87D4A;">Thank you for your order, ${args.name}!</h2>
// //         <p>Your order <strong>#${args.orderId}</strong> has been confirmed.</p>

// //         <h3>Order Summary</h3>
// //         <table style="width:100%; border-collapse: collapse;">
// //           <thead>
// //             <tr>
// //               <th style="text-align:left; padding:8px; border-bottom:1px solid #ddd;">Product</th>
// //               <th style="text-align:center; padding:8px; border-bottom:1px solid #ddd;">Qty</th>
// //               <th style="text-align:right; padding:8px; border-bottom:1px solid #ddd;">Price</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             ${itemsHtml}
// //           </tbody>
// //         </table>

// //         <h3>Shipping Details</h3>
// //         <p>${args.address}, ${args.city}, ${args.zipcode}, ${args.country}</p>

// //         <p><strong>Grand Total:</strong> $${args.grandTotal.toLocaleString()}</p>

// //         <p>If you have any questions, contact our support at
// //           <a href="mailto:support@audiophile.com">support@audiophile.com</a>
// //         </p>

// //         <a href="https://audiophile.com/orders/${args.orderId}"
// //           style="display:inline-block; margin-top:20px; padding:12px 24px; background-color:#D87D4A; color:white; text-decoration:none; border-radius:6px;">
// //           View your order
// //         </a>
// //       </div>
// //     `;

// //     // 2️⃣ Send the email
// //     await resend.emails.send({
// //       from: "orders@audiophile.com",
// //       to: args.email,
// //       subject: `Order Confirmation - #${args.orderId}`,
// //       html,
// //     });

// //     // 3️⃣ Clear the cart after sending the email
// //     await clearCart(ctx, { userId: args.userId });

// //     return { success: true };
// //   },
// // });

// import { mutation } from "./_generated/server";
// import { v } from "convex/values";
// import { Resend } from "resend";

// export const sendConfirmationEmail = mutation({
//   args: {
//     userId: v.string(),
//     orderId: v.string(),
//     name: v.string(),
//     email: v.string(),
//     address: v.string(),
//     city: v.string(),
//     zipcode: v.string(),
//     country: v.string(),
//     cartItems: v.array(
//       v.object({
//         name: v.string(),
//         quantity: v.number(),
//         price: v.number(),
//       })
//     ),
//     total: v.number(),
//     shipping: v.number(),
//     vat: v.number(),
//     grandTotal: v.number(),
//   },
//   handler: async (ctx, args) => {
//     console.log("sendConfirmationEmail called with:", args);

//     // Clear cart
//     const cartItems = await ctx.db
//       .query("cart")
//       .filter((q) => q.eq(q.field("userId"), args.userId))
//       .collect();

//     for (const item of cartItems) {
//       await ctx.db.delete(item._id);
//     }
//     console.log("Cart cleared for user:", args.userId);

//     // Send email via Resend
//     const resend = new Resend(process.env.RESEND_API_KEY!);

//     const itemsHtml = args.cartItems
//       .map(
//         (item) => `
//         <tr>
//           <td style="padding: 8px; border-bottom: 1px solid #ddd;">${item.name}</td>
//           <td style="padding: 8px; border-bottom: 1px solid #ddd;">x${item.quantity}</td>
//           <td style="padding: 8px; border-bottom: 1px solid #ddd;">$${item.price.toLocaleString()}</td>
//         </tr>
//       `
//       )
//       .join("");

//     const html = `
//       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px;">
//         <h2 style="color:#D87D4A;">Thank you for your order, ${args.name}!</h2>
//         <p>Your order <strong>#${args.orderId}</strong> has been confirmed.</p>

//         <h3>Order Summary</h3>
//         <table style="width:100%; border-collapse: collapse;">
//           <thead>
//             <tr>
//               <th style="text-align:left; padding:8px; border-bottom:1px solid #ddd;">Product</th>
//               <th style="text-align:center; padding:8px; border-bottom:1px solid #ddd;">Qty</th>
//               <th style="text-align:right; padding:8px; border-bottom:1px solid #ddd;">Price</th>
//             </tr>
//           </thead>
//           <tbody>
//             ${itemsHtml}
//           </tbody>
//         </table>

//         <h3>Shipping Details</h3>
//         <p>${args.address}, ${args.city}, ${args.zipcode}, ${args.country}</p>

//         <p><strong>Grand Total:</strong> $${args.grandTotal.toLocaleString()}</p>

//         <p>If you have any questions, contact <a href="mailto:support@audiophile.com">support@audiophile.com</a></p>
//       </div>
//     `;

//     await resend.emails.send({
//       from: "orders@audiophile.com",
//       to: args.email,
//       subject: `Order Confirmation - #${args.orderId}`,
//       html,
//     });

//     console.log("Email sent to:", args.email);

//     return { success: true };
//   },
// });

// convex/mutations/sendConfirmationEmail.ts
import { mutation } from "./_generated/server";
import { v } from "convex/values";
import { Resend } from "resend";

export const sendConfirmationEmail = mutation({
  args: {
    userId: v.string(),
    orderId: v.string(),
    name: v.string(),
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
  },
  handler: async (ctx, args) => {
    try {
      console.log("✅ sendConfirmationEmail called with:", args);

      // 1️⃣ Clear the cart
      const cartItemsInDb = await ctx.db
        .query("cart")
        .filter((q) => q.eq(q.field("userId"), args.userId))
        .collect();

      for (const item of cartItemsInDb) {
        await ctx.db.delete(item._id);
      }
      console.log(`🗑️ Cart cleared for user: ${args.userId}`);

      // 2️⃣ Initialize Resend
      const resendApiKey = process.env.RESEND_API_KEY;
      if (!resendApiKey) {
        console.error("❌ RESEND_API_KEY not set in environment!");
        throw new Error("Missing Resend API key");
      }

      const resend = new Resend(resendApiKey);

      // 3️⃣ Build HTML
      const itemsHtml = args.cartItems
        .map(
          (item) => `
        <tr>
          <td style="padding:8px; border-bottom:1px solid #ddd;">${item.name}</td>
          <td style="padding:8px; border-bottom:1px solid #ddd; text-align:center;">x${item.quantity}</td>
          <td style="padding:8px; border-bottom:1px solid #ddd; text-align:right;">$${item.price.toLocaleString()}</td>
        </tr>
      `
        )
        .join("");

      const html = `
      <div style="font-family:Arial,sans-serif; max-width:600px; margin:auto; padding:20px;">
        <h2 style="color:#D87D4A;">Thank you for your order, ${args.name}!</h2>
        <p>Your order <strong>#${args.orderId}</strong> has been confirmed.</p>

        <h3>Order Summary</h3>
        <table style="width:100%; border-collapse:collapse;">
          <thead>
            <tr>
              <th style="text-align:left; padding:8px; border-bottom:1px solid #ddd;">Product</th>
              <th style="text-align:center; padding:8px; border-bottom:1px solid #ddd;">Qty</th>
              <th style="text-align:right; padding:8px; border-bottom:1px solid #ddd;">Price</th>
            </tr>
          </thead>
          <tbody>
            ${itemsHtml}
          </tbody>
        </table>

        <h3>Shipping Details</h3>
        <p>${args.address}, ${args.city}, ${args.zipcode}, ${args.country}</p>

        <p><strong>Grand Total:</strong> $${args.grandTotal.toLocaleString()}</p>

        <p>If you have any questions, contact <a href="mailto:support@audiophile.com">support@audiophile.com</a></p>
      </div>
      `;

      // 4️⃣ Send email
      const response = await resend.emails.send({
        from: "orders@audiophile.com",
        to: args.email,
        subject: `Order Confirmation - #${args.orderId}`,
        html,
      });

      console.log("✉️ Email sent successfully:", response);

      return { success: true };
    } catch (err) {
      console.error("❌ Error in sendConfirmationEmail:", err);
      throw err;
    }
  },
});
