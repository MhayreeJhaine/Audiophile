import { useEffect } from "react";

import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useAnonUserId } from "./getUserId";

export default function ClearCartOnLoad() {
  const userId = useAnonUserId();
  const clearCartMutation = useMutation(api.cart.clearCart);

  useEffect(() => {
    if (!userId) return;
    // Fire and forget, don't block rendering
    clearCartMutation({ userId })
      .then(() => console.log("Cart cleared on load ✅"))
      .catch((err) => console.error("Error clearing cart on load:", err));
  }, [userId, clearCartMutation]);

  return null; // Render nothing
}
