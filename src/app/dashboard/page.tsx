"use client"

import TaskInput from "@/components/TaskInput";
import TaskList from "@/components/TaskList";
import { useAppSelector, useAppDispatch } from "@/lib/store";
import Link from "next/link";
import { useEffect } from "react";
import { fetchCatQuote } from "@/lib/quoteSlice";

export default function Dashboard() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const { quote, loading } = useAppSelector((state) => state.quote);
  
  useEffect(() => {
    dispatch(fetchCatQuote()); // Fetch quote on mount
  }, [user]);


  if (!user) {
    return (
        <div className="flex flex-col justify-center items-center mt-7">
                <div className="flex text-center items-center flex-col p-4 border-2 border-neutral-800 rounded-md max-w-96 gap-3 w-5/6 sm:4/5 md:w-3/4 lg:w-1/2">
                    <h1 className="text-2xl font-bold text-wrap">Please login before adding any task</h1>
                    <Link href="/login"
                          className="border border-green-400 text-green-400 text-md font-semibold rounded-md px-4 py-1 hover:bg-green-950 hover:text-green-300">
                        Login
                    </Link>
                </div>
            </div>
    );
  }
  return (
    <main className="flex text-center flex-col gap-2 justify-center items-center pt-5">
      <h1 className="text-3xl font-bold mt-4 mb-1">To-Do List</h1>
      {loading ? <p>Loading quote...</p> : <p className="text-wrap w-5/6 sm:4/5 md:w-3/4 lg:w-1/2 mb-3">🐱 Cat Quote: {quote}</p>}
      <TaskInput />
      <TaskList />
    </main>
  );
}
