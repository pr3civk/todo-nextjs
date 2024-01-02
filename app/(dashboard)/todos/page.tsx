import db from "@/utils/db";
import TodoList from "@/components/TodoList";

const getData = async () => {
  const todos = await db.todo.findMany({});
  return todos;
};

const TasksPage = async () => {
    const todos = await getData();
    return <div className="flex justify-center p-4">
      <TodoList todos={todos}/>
    </div>;
  };

export default TasksPage;
