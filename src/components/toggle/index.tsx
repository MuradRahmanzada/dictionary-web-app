import { useContext } from "react";
import { themeContext } from "../../store/ThemeContext";
import { HiOutlineMoon } from "react-icons/hi";
import { CiSun } from "react-icons/ci";

const Toggle = () => {
  const { handleThemeSwitch, theme } = useContext(themeContext);
  console.log(theme)

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        onClick={handleThemeSwitch}
      />
      <div className="w-11 h-5 bg-gray-500 dark:bg-fuchsia-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all" />
      <button className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        {theme === "light" ? (
          <CiSun size={20} className="text-gray-400" />
        ) : (
          <HiOutlineMoon size={20} className="text-gray-400" />
        )}
      </button>
    </label>
  );
};

export { Toggle };
