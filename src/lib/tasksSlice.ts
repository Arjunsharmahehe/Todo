import { createSlice, PayloadAction } from "@reduxjs/toolkit";


// Function to load the tasks form local storage
const loadTasks = () => {
  // Check if running in a browser environment  
  if (typeof window !== "undefined") {
    const savedTasks = localStorage.getItem("tasks");
    // Parse the stored JSON or return an empty array if nothing is there
    return savedTasks ? JSON.parse(savedTasks) : [];
  }
    return [];
};

// Structure of a single task object
type Task = {
  id: string;
  text: string;
  priority: Priority;
};

// Possible tpyes of the priority key
export type Priority = "High" | "Medium" | "Low";

// Type: Array of all the tasks
type TasksState = {
  tasks: Task[];
};

// Define the initial state of tasks slice
const initialState: TasksState = {
  tasks: loadTasks(),
};


const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    // Reducer to add, delete, and set task priority
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
