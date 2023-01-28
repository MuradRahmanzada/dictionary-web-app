import { Logo } from "../Logo";
import { Toggle } from "../Toggle";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <Logo />
      <Toggle />
    </div>
  );
};

export { Header };
