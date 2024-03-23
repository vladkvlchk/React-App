import { Calendar, Clock, Crosshair, PenSquare, Tag } from "lucide-react";
import React from "react";

const FullTask = () => {
  const title = "Task name";
  const description =
    "Here I will describe the task if I want. Do you think It is necessary? I'll insert so much text here to handle correct appearance of long text. Anyway, Nobody'll read it but me, so I can ndfndsfonddf4n 234 234i 2wm fiewf w fi r";

  return (
    <div className="flex max-w-1/2 h-70vh">
      <div className="p-12 w-8/12">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl font-bold">{title}</h1>
          <button className="flex border px-4 py-1 items-center rounded-md">
            <span className="text-slate-600">
              <PenSquare />
            </span>
            <p className="ml-2 font-semibold">Edit task</p>
          </button>
        </div>
        <>
          <div className="flex w-1/3">
            <div className="flex-1">
              <div className="text-slate-500 flex mb-6">
                <Crosshair />
                <h4 className="ml-2">Status</h4>
              </div>
              <div className="text-slate-500 flex mb-6">
                <Calendar />
                <h4 className="ml-2">Due date</h4>
              </div>
              <div className="text-slate-500 flex mb-6">
                <Tag />
                <h4 className="ml-2">Priority</h4>
              </div>
            </div>
            <div className="flex-1">
              <div className="mb-6">
                <b className="font-medium">In Progress</b>
              </div>
              <div className="mb-6">
                <b className="font-medium">Wed, 29 April</b>
              </div>
              <div className="mb-6">
                <b className="font-medium">Low</b>
              </div>
            </div>
          </div>
        </>
        <div>
          <h2 className="text-xl font-semibold">Description</h2>
          <p className="text-slate-500 mt-4">{description}</p>
        </div>
      </div>
      <div className="bg-slate-200 p-12 w-4/12 rounded-br-2xl">
        <h2 className="text-xl font-semibold">Activity</h2>
        <ul className="text-slate-700 list-disc">
          <li className="my-4">
            <div className="flex justify-between">
              <p className="flex-1">You created this task</p>
              <p className="flex-2 ml-1">Mar 5 at 5:10 pm</p>
            </div>
          </li>
          <li className="my-4">
            <div className="flex justify-between">
              <p className="flex-1">
                You changed status from
                <i className="text-slate-950"> •To Do </i>to
                <i className="text-slate-950"> •In Progress </i>
              </p>
              <p className="flex-2 ml-1">Mar 7 at 7:25 pm</p>
            </div>
          </li>
          <li className="my-4">
            <div className="flex justify-between">
              <p className="flex-1">
                You remaned this task from{" "}
                <i className="text-slate-950"> •Task #1 </i> to{" "}
                <i className="text-slate-950"> •Task #2 </i>
              </p>
              <p className="flex-2 ml-1">Mar 5 at 5:10 pm</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FullTask;
