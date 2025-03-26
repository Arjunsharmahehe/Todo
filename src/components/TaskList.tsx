"use client";

import { useAppSelector, useAppDispatch } from "@/lib/store";
import { deleteTask } from "@/lib/tasksSlice";

export default function TaskList() {
  const tasks = useAppSelector((state) => state.tasks.tasks);
  const dispatch = useAppDispatch();

  const priorityStyles = {
    high: {
      background: 'bg-red-100 text-red-800',
      border: 'border-red-300',
      icon: 'text-red-500'
    },
    medium: {
      background: 'bg-yellow-100 text-yellow-800',
      border: 'border-yellow-300',
      icon: 'text-yellow-500'
    },
    low: {
      background: 'bg-green-100 text-green-800',
      border: 'border-green-300',
      icon: 'text-green-500'
    }
  };
  

  return (
    <ul className="flex flex-col gap-3 px-3 py-2 items-center w-5/6 sm:4/5 md:w-3/4 lg:w-1/2 border-2 border-neutral-800 rounded-md justify-between">
      {tasks?.length > 0 ? tasks.map((task) => (
        <li key={task.id} className="flex gap-3 px-3 py-2 items-center w-full border-2 border-neutral-800 rounded-md justify-between">
          <p className="flex gap-3 overflow-auto">{task.text}
          <strong className={`h-fit items-center px-3 py-1 rounded-full text-xs font-semibold border capitalize ${task.priority === 'High' ? 'text-red-100 bg-red-800 border-red-300': task.priority === "Medium"? 'text-yellow-100 bg-yellow-800 border-yellow-300' :'text-green-100 bg-green-800 border-green-300' }`}>{task.priority}</strong></p>
          <button className="border border-red-800 text-red-800 text-md font-semibold rounded-md px-4 py-1 hover:bg-red-950 hover:text-red-300" 
          onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
        </li>
      )) : <li className="flex gap-3 px-3 py-2 items-center w-full bg-neutral-900 rounded-md justify-center">
                <p className="text-neutral-500 font-bold text-2xl">To-do List is empty</p>
           </li>}
    </ul>
  );
}
