import { mutation } from "../../_generated/server";
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

      const resendApiKey = process.env.RESEND_API_KEY;
      if (!resendApiKey) throw new Error("Missing Resend API key");

      const resend = new Resend(resendApiKey);

      // Build HTML for items
      const itemsHtml = args.cartItems
        .map(
          (item) => `
          <tr>
            <td style="padding:8px; border-bottom:1px solid #eee;">${item.name}</td>
            <td style="padding:8px; border-bottom:1px solid #eee; text-align:center;">x${item.quantity}</td>
            <td style="padding:8px; border-bottom:1px solid #eee; text-align:right;">$${item.price.toLocaleString()}</td>
          </tr>
        `
        )
        .join("");

      const html = `
      <div style="font-family:Arial,sans-serif; max-width:600px; margin:auto; padding:20px; color:#333;">
        <h2 style="color:#D87D4A;">Thank you for your order, ${args.name}!</h2>
        <p>Your order <strong>#${args.orderId}</strong> has been confirmed.</p>

        <h3 style="border-bottom:1px solid #ddd; padding-bottom:5px;">Order Summary</h3>
        <table style="width:100%; border-collapse:collapse; margin-bottom:20px;">
          <thead>
            <tr>
              <th style="text-align:left; padding:8px;">Product</th>
              <th style="text-align:center; padding:8px;">Qty</th>
              <th style="text-align:right; padding:8px;">Price</th>
            </tr>
          </thead>
          <tbody>
            ${itemsHtml}
          </tbody>
        </table>

        <h3 style="border-bottom:1px solid #ddd; padding-bottom:5px;">Shipping Details</h3>
        <p>${args.address}, ${args.city}, ${args.zipcode}, ${args.country}</p>

        <p><strong>Total:</strong> $${args.total.toLocaleString()}<br/>
           <strong>Shipping:</strong> $${args.shipping.toLocaleString()}<br/>
           <strong>VAT:</strong> $${args.vat.toLocaleString()}<br/>
           <strong>Grand Total:</strong> $${args.grandTotal.toLocaleString()}</p>

        <p>If you have any questions, contact <a href="mailto:support@audiophile.com">support@audiophile.com</a></p>
      </div>
      `;

      // Send email
      const response = await resend.emails.send({
        from: "orders@audiophile.com",
        to: args.email,
        subject: `Order Confirmation - #${args.orderId}`,
        html,
      });

      console.log("✉️ Email sent:", response);

      // Clear cart **after email success**
      const cartItemsInDb = await ctx.db
        .query("cart")
        .filter((q) => q.eq(q.field("userId"), args.userId))
        .collect();

      for (const item of cartItemsInDb) {
        await ctx.db.delete(item._id);
      }
      console.log(`🗑️ Cart cleared for user: ${args.userId}`);

      return { success: true };
    } catch (err) {
      console.error("❌ Error in sendConfirmationEmail:", err);
      throw err;
    }
  },
});
