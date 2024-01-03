"use client";
import { AlertTriangle } from "lucide-react";

const ErrorTodoUI = () => {
  return (
    <div className="flex flex-col w-[30rem] justify-center p-4 items-center gap-4">
      <h2 className="text-5xl border-b border-red-600 p-4 text-nowrap">
        Error fetching data
      </h2>
      <AlertTriangle size="6rem" color="yellow" />
    </div>
  );
};

export default ErrorTodoUI;
