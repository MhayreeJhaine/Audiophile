"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { sendOrderEmail } from "@/lib/sendEmail";

export default function CheckoutPage() {
  const createOrder = useMutation(api.functions.createOrder);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.target);
    const customer = {
      name: form.get("name"),
      email: form.get("email"),
      phone: form.get("phone"),
    };
    const shipping = {
      address: form.get("address"),
      city: form.get("city"),
      country: form.get("country"),
      postalCode: form.get("postalCode"),
    };
    const items = [
      { id: "1", name: "XX99 Headphones", price: 299, quantity: 1 },
    ];
    const totals = { subtotal: 299, shipping: 10, grandTotal: 309 };

    const orderId = await createOrder({ customer, shipping, items, totals });
    await sendOrderEmail(
      customer.email as string,
      customer.name as string,
      orderId
    );

    setLoading(false);
    window.location.href = `/order-confirmation/${orderId}`;
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold mb-2">Checkout</h1>

      <input
        name="name"
        placeholder="Name"
        required
        className="border p-2 w-full"
      />
      <input
        name="email"
        placeholder="Email"
        required
        type="email"
        className="border p-2 w-full"
      />
      <input name="phone" placeholder="Phone" className="border p-2 w-full" />

      <input
        name="address"
        placeholder="Address"
        required
        className="border p-2 w-full"
      />
      <input
        name="city"
        placeholder="City"
        required
        className="border p-2 w-full"
      />
      <input
        name="country"
        placeholder="Country"
        required
        className="border p-2 w-full"
      />
      <input
        name="postalCode"
        placeholder="Postal Code"
        required
        className="border p-2 w-full"
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-black text-white w-full p-2 rounded"
      >
        {loading ? "Processing..." : "Confirm Order"}
      </button>
    </form>
  );
}
