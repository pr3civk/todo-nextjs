import NewTodoForm from "@/components/NewTodoForm";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl md:text-5xl mb-8 ">Type Your task below :)</h2>
      <NewTodoForm />
      <div>{children}</div>
    </div>
  );
};

export default DashboardLayout;
