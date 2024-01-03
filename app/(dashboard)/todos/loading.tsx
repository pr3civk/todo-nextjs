import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex justify-center p-4">
      <div className="items-center">
        <Loader className="animate-spin w-16 h-16" />
        <h2 className="my-6">Loading</h2>
      </div>
    </div>
  );
};

export default Loading;
