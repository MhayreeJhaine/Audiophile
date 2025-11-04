// "use client";

// import { useState } from "react";
// import { useMutation } from "convex/react";
// import { api } from "../../../convex/_generated/api";
// import { sendOrderEmail } from "@/lib/sendEmail";

// export default function CheckoutPage() {
//   const createOrder = useMutation(api.functions.createOrder);
//   const [loading, setLoading] = useState(false);

//   async function handleSubmit(e: any) {
//     e.preventDefault();
//     setLoading(true);

//     const form = new FormData(e.target);
//     const customer = {
//       name: form.get("name"),
//       email: form.get("email"),
//       phone: form.get("phone"),
//     };
//     const shipping = {
//       address: form.get("address"),
//       city: form.get("city"),
//       country: form.get("country"),
//       postalCode: form.get("postalCode"),
//     };
//     const items = [
//       { id: "1", name: "XX99 Headphones", price: 299, quantity: 1 },
//     ];
//     const totals = { subtotal: 299, shipping: 10, grandTotal: 309 };

//     const orderId = await createOrder({ customer, shipping, items, totals });
//     await sendOrderEmail(
//       customer.email as string,
//       customer.name as string,
//       orderId
//     );

//     setLoading(false);
//     window.location.href = `/order-confirmation/${orderId}`;
//   }

//   return (
//     <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 space-y-4">
//       <h1 className="text-2xl font-bold mb-2">Checkout</h1>

//       <input
//         name="name"
//         placeholder="Name"
//         required
//         className="border p-2 w-full"
//       />
//       <input
//         name="email"
//         placeholder="Email"
//         required
//         type="email"
//         className="border p-2 w-full"
//       />
//       <input name="phone" placeholder="Phone" className="border p-2 w-full" />

//       <input
//         name="address"
//         placeholder="Address"
//         required
//         className="border p-2 w-full"
//       />
//       <input
//         name="city"
//         placeholder="City"
//         required
//         className="border p-2 w-full"
//       />
//       <input
//         name="country"
//         placeholder="Country"
//         required
//         className="border p-2 w-full"
//       />
//       <input
//         name="postalCode"
//         placeholder="Postal Code"
//         required
//         className="border p-2 w-full"
//       />

//       <button
//         type="submit"
//         disabled={loading}
//         className="bg-black text-white w-full p-2 rounded"
//       >
//         {loading ? "Processing..." : "Confirm Order"}
//       </button>
//     </form>
//   );
// }

"use client";

export default function CheckoutPage() {
  return (
    <main className="bg-audiophile-lightGray min-h-screen py-20">
      <section className="max-w-6xl mx-auto px-6 grid lg:grid-cols-3 gap-10">
        {/* Checkout Form */}
        <form className="bg-white rounded-lg p-8 lg:col-span-2 space-y-10">
          <h1 className="text-2xl font-bold uppercase tracking-widest mb-4">
            Checkout
          </h1>

          {/* Billing Details */}
          <div>
            <h2 className="text-sm text-audiophile-orange uppercase tracking-widest font-semibold mb-4">
              Billing Details
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label className="text-sm font-semibold">Name</label>
                <input
                  type="text"
                  placeholder="Alexei Ward"
                  className="border border-gray-300 rounded-md px-4 py-3 mt-2 text-sm focus:outline-none focus:border-audiophile-orange"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold">Email Address</label>
                <input
                  type="email"
                  placeholder="alexei@mail.com"
                  className="border border-gray-300 rounded-md px-4 py-3 mt-2 text-sm focus:outline-none focus:border-audiophile-orange"
                />
              </div>
              <div className="flex flex-col md:col-span-2">
                <label className="text-sm font-semibold">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+1 202-555-0136"
                  className="border border-gray-300 rounded-md px-4 py-3 mt-2 text-sm focus:outline-none focus:border-audiophile-orange"
                />
              </div>
            </div>
          </div>

          {/* Shipping Info */}
          <div>
            <h2 className="text-sm text-audiophile-orange uppercase tracking-widest font-semibold mb-4">
              Shipping Info
            </h2>
            <div className="grid gap-6">
              <div className="flex flex-col">
                <label className="text-sm font-semibold">Address</label>
                <input
                  type="text"
                  placeholder="1137 Williams Avenue"
                  className="border border-gray-300 rounded-md px-4 py-3 mt-2 text-sm focus:outline-none focus:border-audiophile-orange"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label className="text-sm font-semibold">ZIP Code</label>
                  <input
                    type="text"
                    placeholder="10001"
                    className="border border-gray-300 rounded-md px-4 py-3 mt-2 text-sm focus:outline-none focus:border-audiophile-orange"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="text-sm font-semibold">City</label>
                  <input
                    type="text"
                    placeholder="New York"
                    className="border border-gray-300 rounded-md px-4 py-3 mt-2 text-sm focus:outline-none focus:border-audiophile-orange"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-sm font-semibold">Country</label>
                <input
                  type="text"
                  placeholder="United States"
                  className="border border-gray-300 rounded-md px-4 py-3 mt-2 text-sm focus:outline-none focus:border-audiophile-orange"
                />
              </div>
            </div>
          </div>

          {/* Payment Details */}
          <div>
            <h2 className="text-sm text-audiophile-orange uppercase tracking-widest font-semibold mb-4">
              Payment Details
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="md:col-span-2 flex flex-col">
                <label className="text-sm font-semibold">e-Money Number</label>
                <input
                  type="text"
                  placeholder="238521993"
                  className="border border-gray-300 rounded-md px-4 py-3 mt-2 text-sm focus:outline-none focus:border-audiophile-orange"
                />
              </div>
              <div className="md:col-span-2 flex flex-col">
                <label className="text-sm font-semibold">e-Money PIN</label>
                <input
                  type="password"
                  placeholder="6891"
                  className="border border-gray-300 rounded-md px-4 py-3 mt-2 text-sm focus:outline-none focus:border-audiophile-orange"
                />
              </div>
            </div>
          </div>
        </form>

        {/* Summary Card */}
        <div className="bg-white rounded-lg p-8 h-fit">
          <h2 className="text-lg font-bold uppercase tracking-widest mb-6">
            Summary
          </h2>

          {/* Example Product */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gray-200 rounded-md" />
              <div>
                <h3 className="font-semibold text-sm uppercase">XX99 MK II</h3>
                <p className="text-gray-500 text-sm">$ 2,999</p>
              </div>
            </div>
            <p className="font-semibold text-gray-600">x1</p>
          </div>

          {/* Totals */}
          <div className="space-y-2 mt-6 text-sm">
            <div className="flex justify-between">
              <p className="text-gray-500 uppercase">Total</p>
              <p className="font-bold">$ 5,396</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-500 uppercase">Shipping</p>
              <p className="font-bold">$ 50</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-500 uppercase">VAT (Included)</p>
              <p className="font-bold">$ 1,079</p>
            </div>
          </div>

          {/* Grand Total */}
          <div className="flex justify-between mt-6 text-sm">
            <p className="text-gray-500 uppercase">Grand Total</p>
            <p className="font-bold text-audiophile-orange">$ 5,446</p>
          </div>

          <button className="w-full mt-8 bg-audiophile-orange text-white uppercase text-sm font-semibold tracking-wider py-4 rounded-md hover:bg-lightOrange transition">
            Continue & Pay
          </button>
        </div>
      </section>
    </main>
  );
}
