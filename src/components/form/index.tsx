import React from "react";
import ISearch from "/assets/icon-search.svg";

const Form = () => {
  return (
    <form className="py-14 max-w-2xl">
      <div className="relative">
        <input
          placeholder="Search for the definition of a word"
          className="relative w-full h-full p-4 outline-none rounded-xl bg-gray-100"
        />
        <button type="submit">
          <img src={ISearch} className="absolute top-4 right-0 mx-5" />
        </button>
      </div>
    </form>
  );
};

export { Form };
