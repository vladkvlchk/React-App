import React from "react";
import { EllipsisVertical, Plus, SquarePen, Trash2 } from "lucide-react";

import { ITaskList } from "../types";
import Dropdown from "./Dropdown";
import TaskCard from "./TaskCard";

const TaskList: React.FC<ITaskList> = ({ name, cards }) => {
  return (
    <div className="min-w-80 mr-4">
      <div className="border-y-2 flex justify-between py-2">
        <h3>{name}</h3>
        <div className="flex">
          <p className="mx-4">{cards.length}</p>
          <Dropdown
            trigger={
              <button className="mx-2">
                <EllipsisVertical />
              </button>
            }
          >
            <li className="flex items-center">
              <span className="text-slate-600 mr-2">
                <SquarePen />
              </span>
              <p className="font-semibold">Edit</p>
            </li>
            <li className="flex items-center">
              <span className="text-slate-600 mr-2">
                <Plus />
              </span>
              <p className="font-semibold">Add new card</p>
            </li>
            <li className="flex items-center text-red-500">
              <span className="mr-2">
                <Trash2 />
              </span>
              <p className="font-semibold">Delete</p>
            </li>
          </Dropdown>
        </div>
      </div>
      <button className="w-full border-dashed border-2 p-3 my-2 rounded-lg">
        + Add New Card
      </button>
      <div>
        {cards ? (
          cards.map((card) => <TaskCard key={card.id} {...card} />)
        ) : (
          <div>no card</div>
        )}
      </div>
    </div>
  );
};

export default TaskList;
