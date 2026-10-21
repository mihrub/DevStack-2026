import { use } from "react";
import type { Technology } from "../types/technology";
import Stack from "./Stack";
import Card from "./Card";

interface TechnologiesProps {
  technologiesPromise: Promise<Technology[]>;
}

const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
  const technologies = use(technologiesPromise);
  console.log(technologies);
  return (
    <section>
      <h2 className="pl-15 font-bold text-2xl">
        Explore the{" "}
        <span className="bg-linear-to-r from-[#F97316] to-[#EC4899] bg-clip-text text-transparent">
          Technologies
        </span>
      </h2>
      <p className="pl-15 text-gray-500">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="flex gap-6 mt-10 pl-15">
        <Card technologies={technologies}></Card>
        <Stack></Stack>
      </div>
      
    </section>
  );
};

export default Technologies;
