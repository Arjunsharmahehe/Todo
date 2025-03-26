"use client";

import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/store";
import { login } from "@/lib/authSlice";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const [username, setUsername] = useState("");
  const dispatch = useAppDispatch();
  const router = useRouter();
  const user = useAppSelector((state) => state.auth.user);

  const handleLogin = () => {
    if (username.trim()) {
      dispatch(login(username));
      router.push("/dashboard")
    }
  };

  if(user){
    return(
        <div className="flex flex-col justify-center items-center mt-7">
        <div className="flex items-center flex-col p-4 border-2 border-neutral-800 rounded-md max-w-96 gap-3 w-5/6 sm:4/5 md:w-3/4 lg:w-1/2">
            <h1 className="text-2xl font-bold">Already logged in</h1>
            <Link href="/dashboard"
                    className="border border-blue-400 text-blue-400 text-md font-semibold rounded-md px-4 py-1 hover:bg-blue-950">
                Dashboard
            </Link>
        </div>
    </div>
    )
  }

  return (
    <div className="flex flex-col justify-center items-center mt-7">
        <div className="p-4 border-2 border-neutral-800 rounded-md max-w-96 flex gap-3 w-5/6 sm:4/5 md:w-3/4 lg:w-1/2">
        <input className="flex-1 px-4 py-1 pr-10text-white bg-neutral-800 border-2 border-neutral-800 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-transparent transition-all duration-300 placeholder-gray-500"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={handleLogin}
                className="border border-green-400 text-green-400 text-md font-semibold rounded-md px-4 py-1 hover:bg-green-950 hover:text-green-300">
                    Login
        </button>
        </div>
    </div>
  );
}
