import { useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import CheckoutForm from "../features/checkout/checkoutForm";
import { OrderSummary } from "../features/checkout/orderSummary";
import { OrderCompleted } from "../components/OrderCompleted";
import { useAnonUserId } from "../lib/getUserId";

export default function Checkout() {
  const navigate = useNavigate();

  // Use shared anonymous user ID hook
  const userId = useAnonUserId();

  const [openDialog, setOpenDialog] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [formData, setFormData] = useState<any>(null);

  // ✅ Skip query until userId exists
  const cartItems =
    useQuery(api.cart.getCart, userId ? { userId } : "skip") ?? [];

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
    if (!userId) return;
    try {
      await clearCartMutation({ userId });
      console.log("Cart cleared successfully");
    } catch (err) {
      console.error("Error clearing cart:", err);
    }
  };

  // Handle checkout
  const handleContinue = async () => {
    if (!formValid || !formData || cartItems.length === 0) return;

    const timestamp = Date.now();
    const orderId = `ODR${timestamp}`;

    try {
      // Email mutation disabled for now
      // await sendEmailMutation({...});

      // Show order completed modal
      setOpenDialog(true);
    } catch (err) {
      console.error("Error processing order:", err);
    }
  };

  // Show loading while userId initializes
  if (!userId) {
    return (
      <main className="bg-lightGray px-7">
        <section className="container mx-auto px-4">
          <p className="text-center text-black/50 py-20 animate-pulse">
            Loading checkout...
          </p>
        </section>
      </main>
    );
  }

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

      <OrderCompleted
        open={openDialog}
        onOpenChange={setOpenDialog}
        cartItems={cartItems}
        grandTotal={grandTotal}
        onClearCart={clearCart} // clears cart on modal close
      />
    </main>
  );
}
