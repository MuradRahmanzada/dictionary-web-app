import React from "react";

const PartOfSpeech = ({ speech }: { speech: string }) => {
  return <h1 className="font-bold text dark:text-gray-500">{speech}</h1>;
};

export  {PartOfSpeech};
