import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import headphone3 from "/headphone-3.png";
import earphone from "/earphone-1.png";
import headphone2 from "/headphone-2.png";

export function CartDialog() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "XX99 MK II", price: 2999, quantity: 1, image: headphone3 },
    { id: 2, name: "YX1", price: 599, quantity: 2, image: earphone },
    { id: 3, name: "XX59", price: 899, quantity: 1, image: headphone2 },
  ]);

  const increase = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrease = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const clearCart = () => setCartItems([]);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button aria-label="Open cart">
          <ShoppingCart className="text-white cursor-pointer" />
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
          <p
            onClick={clearCart}
            className="text-black/50 underline cursor-pointer hover:text-[#D87D4A]"
          >
            Remove all
          </p>
        </div>

        <div className="flex flex-col gap-6 max-h-[250px] overflow-y-auto">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center gap-4">
              <div className="flex items-center justify-center bg-[#f1f1f1] w-16 h-16 p-3 rounded-xl">
                <img src={item.image} alt={item.name} className="w-9" />
              </div>

              <div className="w-full flex items-start justify-between">
                <div className="flex flex-col">
                  <h3 className="uppercase text-black font-bold text-[15px] leading-[25px]">
                    {item.name}
                  </h3>
                  <p className="text-black/50 font-bold text-sm leading-[25px]">
                    $ {item.price.toLocaleString()}
                  </p>
                </div>

                <div className="flex items-center gap-5 bg-[#f1f1f1] px-3 py-1.5">
                  <button
                    onClick={() => decrease(item.id)}
                    className="text-sm font-bold text-black/25 hover:text-[#D87D4A] cursor-pointer"
                  >
                    -
                  </button>
                  <p className="font-medium text-base w-5 text-center tracking-[1px]">
                    {item.quantity}
                  </p>
                  <button
                    onClick={() => increase(item.id)}
                    className="text-sm font-bold text-black/25 hover:text-[#D87D4A] cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}

          {cartItems.length === 0 && (
            <p className="text-center text-black/50 text-sm">
              Your cart is empty
            </p>
          )}
        </div>

        <div className="flex justify-between items-center mt-2 pt-4">
          <span className="uppercase text-gray-500 text-sm">Total</span>
          <span className="font-bold text-lg">$ {total.toLocaleString()}</span>
        </div>

        <DialogClose asChild>
          <Link
            to="/checkout"
            className="bg-[#D87D4A] mt-4 w-full text-center text-white px-8 py-4 uppercase text-sm font-medium tracking-[1px] cursor-pointer hover:bg-[#FBAF85] transition-colors duration-300 block"
          >
            Checkout
          </Link>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
