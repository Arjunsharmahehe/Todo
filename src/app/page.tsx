"use client"

import { useAppDispatch, useAppSelector } from "../lib/store";
import { addTask } from "../lib/tasksSlice";

export default function Home() {
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.tasks.tasks);

  return (
    <div>
      <button onClick={() => dispatch(addTask({ id: "1", text: "Test Task", priority: "High" }))}>
        Add Task
      </button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.text} - {task.priority}</li>
        ))}
      </ul>
    </div>
  );
}
