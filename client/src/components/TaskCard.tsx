import { Calendar, ChevronDown, EllipsisVertical, SquarePen, Trash2 } from "lucide-react";
import React from "react";
import { DAYS_OF_WEEK, MONTHES } from "../consts";
import { ITaskCard } from "../types";
import Dropdown from "./Dropdown";

const TaskCard: React.FC<ITaskCard> = ({
  title,
  description,
  dueDate,
  priority,
}) => {
  const date = new Date(dueDate);
  const formatedDate = `${DAYS_OF_WEEK[date.getDay()]}, ${date.getDate()} ${
    MONTHES[date.getMonth()]
  }`;

  return (
    <div className="border rounded-lg border-stone-700 mb-4 p-4">
      <div className="flex justify-between">
        <h2 className="font-semibold">{title}</h2>
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
          <li className="flex items-center text-red-500">
            <span className="mr-2">
              <Trash2 />
            </span>
            <p className="font-semibold">Delete</p>
          </li>
        </Dropdown>
      </div>
      <div className="text-stone-500">
        <p>{description}</p>
      </div>
      <div className="flex">
        <Calendar />
        <p className="mx-2 text-stone-500 font-medium">{formatedDate}</p>
      </div>
      <div>
        <div className="flex items-center bg-slate-200 text-slate-500 w-min px-2 my-2 rounded-full">
          <span className="text-xl">•</span>
          <p className="ml-2">{priority}</p>
        </div>
        <button className="flex bg-slate-300 px-3 py-1 justify-between rounded-lg items-center w-full">
          <p>Move to:</p>
          <ChevronDown />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
