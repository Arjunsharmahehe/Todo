"use client";

import { useEffect } from "react";
import { useAppSelector } from "@/lib/store";

export default function AuthSync() {
  // Select the user state from the store
  const user = useAppSelector((state) => state.auth.user);

  // If user exists add 'authUser' else remove it
  useEffect(() => {
    if (user) {
      localStorage.setItem("authUser", JSON.stringify(user));
    } else {
      localStorage.removeItem("authUser");
    }
  }, [user]);

  return null;
}
