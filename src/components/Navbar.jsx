import React, { useContext } from "react";
import Logo from "../assets/logo.svg";
import IMoon from "../assets/icon-moon.svg";
import { CiSun } from "react-icons/ci";

import { themeContext } from "../store/ThemeContext";

const Navbar = ({ font, setFont }) => {
  const { theme, handleThemeSwitch } = useContext(themeContext);

  return (
    <div className="flex items-center justify-between p-5 md:p-0">
      <div>
        <a href="/">
          <img src={Logo} alt="logo" className="w-10 h-10 cursor-pointer" />
        </a>
      </div>
      <div className="flex items-center gap-7">
        <div className="flex border-r-2 border-slate-30">
          <select
            value={font}
            onChange={(e) => setFont(e.target.value)}
            className="text-lg p-2 mx-2  rounded-lg text-gray-800 dark:bg-black dark:text-white border-none font-semibold cursor-pointer outline-none"
          >
            <option
              value="sans-serif"
              className="dark:bg-white text-black bg-none text-sm font-semibold"
            >
              Sans Serif
            </option>
            <option
              value="serif"
              className="dark:bg-white text-black text-sm font-semibold"
            >
              Serif
            </option>
            <option
              value="mono"
              className="dark:bg-white text-black text-sm font-semibold"
            >
              Mono
            </option>
          </select>
        </div>

        <label className="relative inline-flex items-center cursor-pointer">
          <input
            onClick={handleThemeSwitch}
            type="checkbox"
            value=""
            className="sr-only peer"
          />
          <div className="w-14 h-7 bg-gray-500 hover:bg-purple-500 dark:bg-purple-500  peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[6px] after:left-[6px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all" />
          <button className="ml-3 text-lg font-medium text-gray-800 dark:text-purple-500">
            {theme === "light" ? (
              <img src={IMoon} alt="icon-moon" className="w-5 h-5" />
            ) : (
              <CiSun className="w-5 h-5 text-white" />
            )}
          </button>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
