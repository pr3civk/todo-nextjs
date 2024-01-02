import Todo from "@/components/Todo";

const TodoList = ({ todos }: any) => {
  return (
    <div className="">
      {todos.map((todo: any) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
