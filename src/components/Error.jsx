import React from "react";

const Error = () => {
  return (
    <section className="flex flex-col gap-5 mt-32 text-center">
      <p className="text-6xl">😕</p>
      <h1 className="font-semibold text-xl dark:text-white">No Definitions Found</h1>
      <p className="text-lg dark:text-white">Sorry pal, we couldn't find definitions for the word you were looking for.</p>
    </section>
  );
};

export default Error;
