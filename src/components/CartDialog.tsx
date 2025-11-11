import { useQuery, useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "../components/ui/dialog";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import type { Id } from "../../convex/_generated/dataModel";
import toast from "react-hot-toast";
import { useAnonUserId } from "../lib/getUserId";

export function CartDialog() {
  const userId = useAnonUserId();

  const cartItems = userId
    ? (useQuery(api.cart.getCart, { userId }) ?? [])
    : [];

  const increaseQuantity = useMutation(api.cart.increaseQuantity);
  const decreaseQuantity = useMutation(api.cart.decreaseQuantity);
  const clearCart = useMutation(api.cart.clearCart);

  // Loading state while userId initializes
  if (!userId) {
    return (
      <button aria-label="Loading cart...">
        <ShoppingCart className="text-gray-400 animate-pulse" />
      </button>
    );
  }

  const handleIncrease = async (itemId: Id<"cart">) => {
    try {
      await increaseQuantity({ itemId });
    } catch (err) {
      console.error("Error increasing quantity:", err);
    }
  };

  const handleDecrease = async (itemId: Id<"cart">) => {
    try {
      await decreaseQuantity({ itemId });
    } catch (err) {
      console.error("Error decreasing quantity:", err);
    }
  };

  const handleClearCart = async () => {
    try {
      await clearCart({ userId });
      toast.success("Cart cleared");
    } catch (err) {
      console.error("Error clearing cart:", err);
    }
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          aria-label="Open cart"
          className="relative hover:cursor-pointer"
        >
          {/* Cart icon */}
          <ShoppingCart className="text-white" />

          {/* Small circle indicator */}
          {cartItems.length > 0 && (
            <span className="absolute -top-1 -right-1 bg-orange w-3 h-3 rounded-full border-2 border-black"></span>
          )}
        </button>
      </DialogTrigger>

      <DialogContent
        variant="topRight"
        className="absolute top-20 sm:right-10 right-2 sm:w-[380px] w-[320px] bg-white rounded-lg shadow-xl sm:p-8 px-4 py-6"
        style={{ transform: "none" }}
      >
        <div className="w-full flex items-center justify-between mb-8">
          <h3 className="font-bold text-lg tracking-[1.29px] uppercase">
            Cart ({cartItems.length})
          </h3>
          {cartItems.length > 0 && (
            <p
              onClick={handleClearCart}
              className="text-black/50 underline cursor-pointer hover:text-[#D87D4A]"
            >
              Remove all
            </p>
          )}
        </div>

        <div className="flex flex-col gap-6 max-h-[250px] overflow-y-auto">
          {cartItems.length === 0 ? (
            <p className="text-center text-black/50 text-sm">
              Your cart is empty.
              <Link
                to="/"
                className="text-orange font-semibold hover:underline mt-2 block"
              >
                Continue shopping →
              </Link>
            </p>
          ) : (
            cartItems.map((item) => (
              <div key={item._id} className="flex items-center gap-4">
                <div className="flex items-center justify-center bg-lightGray w-16 h-16 p-3 rounded-xl">
                  <img src={item.image} alt={item.name} className="w-9" />
                </div>

                <div className="w-full flex items-start justify-between">
                  <div className="flex flex-col">
                    <h3 className="uppercase text-black font-bold text-[15px] leading-[25px]">
                      {item.name}
                    </h3>
                    <p className="text-black/50 font-bold text-sm leading-[25px]">
                      ${item.price.toLocaleString()}
                    </p>
                  </div>

                  <div className="flex items-center gap-5 bg-lightGray px-3 py-1.5">
                    <button
                      onClick={() => handleDecrease(item._id)}
                      className="text-sm font-bold text-black/25 hover:text-orange cursor-pointer"
                    >
                      -
                    </button>
                    <p className="font-medium text-base w-5 text-center tracking-[1px]">
                      {item.quantity}
                    </p>
                    <button
                      onClick={() => handleIncrease(item._id)}
                      className="text-sm font-bold text-black/25 hover:text-orange cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <>
            <div className="flex justify-between items-center mt-2 pt-4">
              <span className="uppercase text-gray-500 text-sm">Total</span>
              <span className="font-bold text-lg">
                $ {total.toLocaleString()}
              </span>
            </div>

            <DialogClose asChild>
              <Link
                to="/checkout"
                className="bg-orange mt-4 w-full text-center text-white px-8 py-4 uppercase text-sm font-medium tracking-[1px] cursor-pointer hover:bg-lightOrange transition-colors duration-300 block"
              >
                Checkout
              </Link>
            </DialogClose>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
