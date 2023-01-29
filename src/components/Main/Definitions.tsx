import { Definition } from "../../types";

const Definitions = ({ definitions }: { definitions: Definition[] }) => {
  return (
    <ul className="p-5">
      {definitions.map((def, index) => (
        <div key={index} className="flex items-center gap-2">
          <span className="text-fuchsia-600 text-sm">•</span>
          <li className="text-sm dark:text-white">{def.definition}</li>
        </div>
      ))}
    </ul>
  );
};

export { Definitions };
