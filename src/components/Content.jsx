import React from "react";

const Content = ({ antonyms, partOfSpeech, definitions, synonyms }) => {
  return (
    <div className="py-4 px-4 md:px-0">
      <div className="flex flex-row items-center text-lg font-bold">
        <p className="text-2xl dark:text-white">{partOfSpeech}</p>
        <hr className="w-full ml-10" />
      </div>
      <p className="text-xl text-gray-500 dark:text-white">Meaning</p>
      <ul className="py-4 text-gray-800 text-lg space-y-2">
        {definitions?.map((def, index) => (
          <div key={index} className="flex items-center gap-4">
            <span className="text-purple-600 text-2xl">•</span>
            <li className="dark:text-white">{def.definition}</li>
          </div>
        ))}
      </ul>
      {synonyms.length > 0 && (
        <p className="text-xl text-gray-500 dark:text-white py-4">
          Synonyms{" "}
          {synonyms.map((synonym, index) => (
            <span key={index} className="mx-1 text-purple-500 font-semibold">
              {synonym}
            </span>
          ))}
        </p>
      )}

      {antonyms.length > 0 && (
        <p className="text-xl text-gray-500 dark:text-white mt-4">
          Antonyms{" "}
          {antonyms.map((antonym, index) => (
            <span className="mx-1 text-purple-500 font-bold">{antonym}</span>
          ))}
        </p>
      )}
    </div>
  );
};

export default Content;
