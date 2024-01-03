"use client";

import { completeTodo, undoTodo, deleteTodo } from "@/utils/actions";
import { useTransition } from "react";

import { X, Check, Undo } from "lucide-react";

const Todo = ({ todo }: any) => {
  const [isPending, startTransition] = useTransition();
  console.log(todo);
  return (
    <div
      className={`w-96 md:w-[36rem]  my-3 p-2 rounded  transition flex items-center justify-between ${
        todo.completed
          ? "bg-purple-800/50 text-gray-900 line-through"
          : "bg-purple-800 hover:scale-[1.02] hover:bg-purple-600"
      }`}
    >
      <div className="flex items-center gap-2">
        {!todo.completed ? (
          <div className="bg-purple-400 hover:bg-green-500/80  rounded-full p-1">
            <Check
              onClick={() => startTransition(() => completeTodo(todo.id))}
              className="text-white cursor-pointer"
            />
          </div>
        ) : (
          <div className="bg-purple-400 hover:bg-orange-500/70  rounded-full p-1">
            <Undo
              onClick={() => startTransition(() => undoTodo(todo.id))}
              className="text-white cursor-pointer"
            />
          </div>
        )}

        {todo.content}
      </div>
      <div className="bg-purple-400 hover:bg-red-500/70 rounded-full p-1 mr-2">
        <X className="text-white cursor-pointer" onClick={() => startTransition(() => deleteTodo(todo.id))}/>
      </div>
    </div>
  );
};

export default Todo;
