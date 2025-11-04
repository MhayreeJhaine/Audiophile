import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function sendOrderEmail(
  email: string,
  name: string,
  orderId: string
) {
  const html = `
    <div style="font-family: Arial; max-width: 600px; margin:auto;">
      <h2>Hi ${name}, thank you for your order!</h2>
      <p>Your order ID: <strong>${orderId}</strong></p>
      <p>We’re processing your order and will update you soon.</p>
      <a href="https://your-domain.com/order-confirmation/${orderId}"
         style="display:inline-block;background:#000;color:#fff;padding:10px 20px;
         text-decoration:none;border-radius:5px;">
         View your order
      </a>
    </div>
  `;

  await resend.emails.send({
    from: "Audiophile <orders@yourdomain.com>",
    to: email,
    subject: "Your Audiophile Order Confirmation",
    html,
  });
}
