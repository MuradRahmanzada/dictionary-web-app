import React from "react";

import ISource from "../assets/icon-new-window.svg";

const SourceUrl = ({ sourceUrl }) => {
  return (
    <span href={sourceUrl} className="flex text-lg text-gray-800 dark:text-white">
      Source
      <a href={sourceUrl} className="flex mx-3 text-gray-500 underline">
        {sourceUrl} <img src={ISource} alt="icon-new-window" className="mx-2" />
      </a>
    </span>
  );
};

export default SourceUrl;
