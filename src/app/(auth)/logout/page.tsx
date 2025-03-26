"use client";

import { useAppDispatch, useAppSelector } from "@/lib/store";
import { logout } from "@/lib/authSlice";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Logout() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const user = useAppSelector((state) => state.auth.user);

  function logoutHandler(){
    dispatch(logout());
    router.push("/")
  }

  if(!user){
    return(
        <div className="flex flex-col justify-center items-center mt-7">
        <div className="flex items-center flex-col p-4 border-2 border-neutral-800 rounded-md max-w-96 gap-3 w-5/6 sm:4/5 md:w-3/4 lg:w-1/2">
            <h1 className="text-2xl font-bold">You aren&apos;t logged in!</h1>
            <Link href="/login"
                    className="border border-green-400 text-green-400 text-md font-semibold rounded-md px-4 py-1 hover:bg-green-950 hover:text-green-300    ">
                Login
            </Link>
        </div>
    </div>
    )
  }

  return (
    <div className="flex flex-col justify-center items-center mt-7">
        <div className="flex items-center flex-col p-4 border-2 border-neutral-800 rounded-md max-w-96 gap-3 w-5/6 sm:4/5 md:w-3/4 lg:w-1/2">
            <h1 className="text-2xl font-bold">Are you sure?</h1>
            <button onClick={logoutHandler}
                    className="border border-red-400 text-red-400 text-md font-semibold rounded-md px-4 py-1 hover:bg-red-950">
                Logout
            </button>
        </div>
    </div>
  );
}
