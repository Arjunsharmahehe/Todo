"use client";

import { useState } from "react";
import { useAppDispatch } from "@/lib/store";
import { addTask } from "@/lib/tasksSlice";

export default function TaskInput() {
  const dispatch = useAppDispatch();
  const [text, setText] = useState("");
  const [priority, setPriority] = useState<"High" | "Medium" | "Low">("Medium");

  const handleAddTask = () => {
    if (text.trim() === "") return;
    const id = text
    dispatch(addTask({ id, text, priority }));
    setText("");
  };

  return (
    <div className="flex gap-3 px-3 py-2 items-center w-5/6 sm:4/5 md:w-3/4 lg:w-1/2 border-2 border-neutral-800 rounded-md">
      <input className="flex-1 px-4 py-2.5 pr-10text-white bg-neutral-800 border-2 border-neutral-800 rounded-md focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:border-transparent transition-all duration-300 placeholder-gray-500"
        type="text"
        placeholder="Enter task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select className="pl-2" value={priority} onChange={(e) => setPriority(e.target.value as any)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button className="border border-green-400 text-green-400 text-md font-semibold rounded-md px-4 py-1 hover:bg-green-950 hover:text-green-300" 
      onClick={handleAddTask}>Add Task</button>
    </div>
  );
}
