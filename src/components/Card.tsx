import { FaStar } from "react-icons/fa";
import type { Technology } from "../types/technology";

interface TechProps{
    technologies : Technology[]
}

const Card = ({technologies} : TechProps) => {
    return (
        <div className="grid flex-1 grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-3 min-w-0">
          {technologies.map((technology: Technology) => (
            <div
              key={technology.id}
              className="card border border-gray-100 bg-base-100 shadow-sm w-full min-w-0"
            >
              <div className="card-body gap-3 p-5 h-full mt-auto">
                <div className="flex justify-between flex-wrap gap-2">
                  <img
                    src={technology.icon}
                    alt={technology.name}
                    className="w-8"
                  />
                  <span className="badge badge-soft badge-info">
                    {technology.badge}
                  </span>
                </div>

                <div>
                  <h3 className="card-title text-lg">{technology.name}</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {technology.description}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-gray-100 pt-3 text-xs text-gray-500 mt-auto">
                  <span className="badge badge-ghost badge-sm">
                    {technology.category}
                  </span>
                  <span>{technology.difficulty}</span>
                  <span className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    {technology.rating}
                  </span>
                </div>
                <button className="btn btn-block bg-gray-900 text-white mt-3">
                  Add to Stack
                </button>
              </div>
            </div>
          ))}
        </div>
    );
};

export default Card;