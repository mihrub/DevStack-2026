import type { Dispatch, SetStateAction } from "react";
import type { Technology } from "../types/technology";
import { toast } from "react-toastify";
import StackCard from "./StackCard";

interface StackProps{
  selectedStack : Technology[];
  setSelectedStack : Dispatch<SetStateAction<Technology[]>>;
}

const Stack = ({selectedStack, setSelectedStack} : StackProps) => {
  const handleRemove = (technology: Technology) => {
    const restTechnologies = selectedStack.filter(
      (item) => item.id !== technology.id
    );
    setSelectedStack(restTechnologies);
    toast.info(`${technology.name} removed from your stack`);
  };

  const handleRemoveAll = () => {
    setSelectedStack([]);
    toast.info("Your stack has been cleared");
  };
    return (
        <div className="card h-fit w-60 shrink-0 border border-gray-100 bg-base-100 shadow-sm mr-4">
          <div className="card-body">
            <h2 className="card-title">Your Stack</h2>
            <p>{selectedStack.length === 0 ? "No technologies selected yet." : `${selectedStack.length} Technology Selected`}</p>
          </div>
          {selectedStack.length === 0 ? (<div className="mb-8 text-center">Your stack is empty.</div>
          ) :
          <StackCard selectedStack = {selectedStack} setSelectedStack={setSelectedStack} handleRemove={handleRemove} handleRemoveAll={handleRemoveAll}></StackCard>
          }
        </div>
    );
};

export default Stack;