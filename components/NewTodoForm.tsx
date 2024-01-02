import { newTodo } from "@/utils/actions";

const NewTodoForm = () => {
  return (
    <form action={newTodo} className="flex flex-col items-center gap-4 justify-center ">
      <input
        name="content"
        type="text"
        className="text-white p-2 rounded w-96 bg-purple-500 border border-white focus:shadow-purple-500 focus:shadow-lg"
      />
      <button type="submit" className="ml-4 hover:text-purple-400 ">Add New Task</button>
    </form>
  );
};

export default NewTodoForm;
