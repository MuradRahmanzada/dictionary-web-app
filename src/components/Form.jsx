import React from "react";

import ISearch from "../assets/icon-search.svg";

const Form = ({word, setWord, handleSubmit}) => {
  return (
    <form className="relative my-12 px-5 md:px-0" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for any word.."
        value={word}
        onChange={(e) => setWord(e.target.value)}
        className="dark:bg-[#1f1f1f] focus:border-2 focus:border-purple-500 dark:focus:border-2 dark:focus:border-white dark:text-white w-full py-5 px-7  md:text-xl rounded-2xl outline-none font-semibold bg-gray-100 shadow-md"
      />
      <button
        type="submit"
        className="absolute top-0 right-12 bottom-0 cursor-pointer"
      >
        <img src={ISearch} alt="search-logo" />
      </button>
    </form>
  );
};

export default Form;
