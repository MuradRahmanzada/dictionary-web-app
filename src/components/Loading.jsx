import React from "react";

const Loading = () => {
  return (
    <div className="flex flex-col space-y-3 animate-pulse py-12 container mx-auto max-w-2xl p-5 xl:p-0">
      <div className="h-6 bg-gray-300 mt-5 rounded-md"></div>
      <div className="h-40 bg-gray-300 mt-5 rounded-md"></div>
      <div className=" h-8 bg-gray-300 mt-5 rounded-md"></div>
      <div className="h-40 bg-gray-300 mt-5 rounded-md"></div>
    </div>
  );
};

export default Loading;
