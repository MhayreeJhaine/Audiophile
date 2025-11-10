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
  const cartItems = useQuery(api.cart.getCart, { userId }) ?? [];

  const sendEmailMutation = useMutation(
    api.sendConfirmationEmail.sendConfirmationEmail
  );
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

  const handleContinue = async () => {
    if (!formData) return;

    const timestamp = Date.now();
    const orderId = `ODR${timestamp}`;

    console.log("Calling sendConfirmationEmail...");

    try {
      await sendEmailMutation({
        userId,
        orderId,
        name: formData.name,
        email: formData.email,
        address: formData.address,
        city: formData.city,
        zipcode: formData.zipcode,
        country: formData.country,
        cartItems,
        total,
        shipping,
        vat,
        grandTotal,
      });

      setOpenDialog(true);
    } catch (err) {
      console.error("Failed to send email or clear cart:", err);
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

      <OrderCompleted
        open={openDialog}
        onOpenChange={setOpenDialog}
        cartItems={cartItems}
        grandTotal={grandTotal}
      />
    </main>
  );
}
