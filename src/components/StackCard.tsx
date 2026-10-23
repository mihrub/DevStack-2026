import { FaTimes } from "react-icons/fa";
import type { Technology } from "../types/technology";
import type { Dispatch, SetStateAction } from "react";

interface StackCardProps{
    selectedStack : Technology[];
    setSelectedStack : Dispatch<SetStateAction<Technology[]>>;
    handleRemove : (technology :Technology) => void;
    handleRemoveAll : () => void;
}

const StackCard = ({selectedStack, handleRemove, handleRemoveAll} : StackCardProps) => {
    return (
      <div>
        <ul className="mt-3 flex flex-col gap-2">
          {selectedStack.map((technology) => (
            <li
              key={technology.id}
              className="flex items-center gap-2 rounded-lg border border-gray-100 p-2"
            >
              <img
                src={technology.icon}
                alt={technology.name}
                className="w-8"
              />
              <div className="flex-1">
                <p className="text-xs font-semibold">
                  {technology.name}
                </p>
                <p className="text-[10px] text-gray-400">
                  {technology.category}
                </p>
              </div>
              <button
                onClick={() => handleRemove(technology)}
                className="cursor-pointer text-gray-400 hover:text-red-500"
              >
                <FaTimes />
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={handleRemoveAll}
          className="mt-6 w-full cursor-pointer rounded-lg border border-red-300 bg-white py-2 text-sm font-semibold text-red-600 hover:bg-red-50"
        >
          Remove All
        </button>
      </div>
    );
};

export default StackCard;