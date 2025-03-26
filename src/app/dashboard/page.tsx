import TaskInput from "@/components/TaskInput";
import TaskList from "@/components/TaskList";

export default function Dashboard() {
  return (
    <main className="flex flex-col gap-2 justify-center items-center pt-5">
      <h1 className="text-3xl font-bold my-4">To-Do List</h1>
      <TaskInput />
      <TaskList />
    </main>
  );
}
