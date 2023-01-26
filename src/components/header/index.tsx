import { Logo } from "../logo";
import { Toggle } from "../toggle";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <Logo />
      <Toggle />
    </div>
  );
};

export { Header };
