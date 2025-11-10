import { useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import CheckoutForm from "../features/checkout/checkoutForm";
import { OrderSummary } from "../features/checkout/orderSummary";
import { OrderCompleted } from "../components/OrderCompleted";

export default function Checkout() {
  const [openDialog, setOpenDialog] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [formData, setFormData] = useState<any>(null);
  const navigate = useNavigate();

  const userId = "guest";

  // Get cart items
  const cartItems = useQuery(api.cart.getCart, { userId }) ?? [];

  // Mutation to clear cart
  const clearCartMutation = useMutation(api.cart.clearCart);

  // Calculate totals
  const { total, shipping, vat, grandTotal } = useMemo(() => {
    const total = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    const shipping = 50;
    const vat = Math.round(total * 0.2);
    const grandTotal = total + shipping + vat;
    return { total, shipping, vat, grandTotal };
  }, [cartItems]);

  // Clear cart function
  const clearCart = async () => {
    try {
      await clearCartMutation({ userId });
    } catch (err) {
      console.error("Error clearing cart:", err);
    }
  };

  // Handle continue/checkout
  const handleContinue = async () => {
    if (!formData || cartItems.length === 0) return;

    const timestamp = Date.now();
    const orderId = `ODR${timestamp}`;

    try {
      // Email mutation is inactive for now
      // await sendEmailMutation({ ... });

      // Show order completed dialog
      setOpenDialog(true);
    } catch (err) {
      console.error("Error processing order:", err);
    }
  };

  return (
    <main className="bg-lightGray px-7">
      <section className="container mx-auto px-4">
        <button
          onClick={() => navigate(-1)}
          className="py-12 block w-fit text-black/50 hover:text-[#D87D4A]"
        >
          Go Back
        </button>

        <section className="flex items-start lg:flex-row flex-col justify-between gap-[30px] pb-20">
          <CheckoutForm
            onFormValidChange={setFormValid}
            onFormDataChange={setFormData}
          />

          <OrderSummary
            cartItems={cartItems}
            total={total}
            shipping={shipping}
            vat={vat}
            grandTotal={grandTotal}
            formValid={formValid}
            onContinue={handleContinue}
          />
        </section>
      </section>

      {/* Order completed modal */}
      <OrderCompleted
        open={openDialog}
        onOpenChange={setOpenDialog}
        cartItems={cartItems}
        grandTotal={grandTotal}
        onClearCart={clearCart} // cart cleared on modal close
      />
    </main>
  );
}
