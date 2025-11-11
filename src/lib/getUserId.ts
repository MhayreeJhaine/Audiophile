// /lib/getUserId.ts
import { useEffect, useState } from "react";

export function useAnonUserId() {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    let id = localStorage.getItem("anonUserId");
    if (!id) {
      id = crypto.randomUUID();
      localStorage.setItem("anonUserId", id);
    }
    setUserId(id);
  }, []);

  return userId;
}
