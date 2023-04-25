import React, { useRef } from "react";
import IPlay from "../assets/icon-play.svg";

const Heading = ({ word, audioUrl, phonetic }) => {
  const ref = useRef();
  
  const playAudio = () => {
    ref.current.play();
  }

  return (
    <div>
      <div className="flex items-center justify-between px-5 md:px-0">
        <div className="flex flex-col gap-2">
          <h1 className="text-gray-800 dark:text-white text-7xl font-bold">{word}</h1>
          <span className="mt-3 text-2xl font-semibold text-purple-500">{phonetic}</span>
        </div>
        <button onClick={playAudio} className="rounded-full flex flex-row items-center justify-center">
          <img src={IPlay} alt="icon-play" width={75} height={75} />
        </button>
        <audio className="hidden" ref={ref} src={audioUrl} />
      </div>
    </div>
  );
};

export default Heading;
