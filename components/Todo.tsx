import { X } from "lucide-react";

const Todo = ({ todo }: any) => {
  return (
    <div
      className="w-96 bg-purple-800 my-3 p-2 rounded hover:scale-[1.05]
    hover:bg-purple-600 cursor-pointer transition flex items-center justify-between"
    >
      {todo.content}
      <div className="bg-purple-400 rounded-full mr-2">
        <X className="text-white"/>
      </div>
    </div>
  );
};

export default Todo;
