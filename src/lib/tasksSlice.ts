import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const loadTasks = () => {
    if (typeof window !== "undefined") {
      const savedTasks = localStorage.getItem("tasks");
      return savedTasks ? JSON.parse(savedTasks) : [];
    }
    return [];
  };

type Task = {
  id: string;
  text: string;
  priority: Priority;
};

export type Priority = "High" | "Medium" | "Low";

type TasksState = {
  tasks: Task[];
};

const initialState: TasksState = {
  tasks: loadTasks(),
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    setPriority: (state, action: PayloadAction<{ id: string; priority: Task["priority"] }>) => {
      const task = state.tasks.find((t) => t.id === action.payload.id);
      if (task) task.priority = action.payload.priority;
    },
  },
});

export const { addTask, deleteTask, setPriority } = tasksSlice.actions;
export default tasksSlice.reducer;
