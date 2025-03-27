"use client";

import { useEffect } from "react";
import { useAppSelector } from "@/lib/store";

export default function AuthSync() {
  const user = useAppSelector((state) => state.auth.user);

  useEffect(() => {
    if (user) {
      localStorage.setItem("authUser", JSON.stringify(user));
    } else {
      localStorage.removeItem("authUser");
    }
  }, [user]);

  return null;
}
