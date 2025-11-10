import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import toast from "react-hot-toast";

interface AddToCartButtonProps {
  product: {
    id: string | number;
    name: string;
    price: number;
    image: { desktop: string };
  };
  quantity?: number;
}

export default function AddToCartButton({
  product,
  quantity = 1,
}: AddToCartButtonProps) {
  const userId = "guest";
  const addToCartMutation = useMutation(api.cart.addToCart);

  const handleAddToCart = async () => {
    console.log("Add to cart clicked", product.name);
    try {
      await addToCartMutation({
        userId,
        productId: String(product.id),
        name: product.name,
        price: product.price,
        image: product.image.desktop.replace("./assets", ""),
        quantity,
      });
      //   console.log("Mutation success");
      toast.success(`${product.name} added to cart!`);
    } catch (error) {
      //   console.error("Mutation failed", error);
      toast.error("Failed to add product to cart");
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      className="bg-orange text-white px-8 py-4 uppercase text-sm font-medium tracking-[1px] cursor-pointer hover:bg-lightOrange transition-colors duration-300"
    >
      Add to Cart
    </button>
  );
}
