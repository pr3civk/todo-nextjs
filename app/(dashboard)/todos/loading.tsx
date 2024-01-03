import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <div className="p-4">
      <Loader className="animate-spin w-16 h-16" />
      <h2 className="my-6">Loading</h2>
    </div>
  );
};

export default Loading;
