import { X } from "lucide-react";
import React from "react";
import { ISidebar } from "../types";

const Sidebar: React.FC<ISidebar> = ({ children, onClose }) => {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 overflow-auto bg-gray-900 bg-opacity-50 backdrop-blur-sm justify-center items-center flex hover:cursor-pointer"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="fixed inset-y-0 w-96 bg-gray-200 shadow-md right-0 hover:cursor-default"
      >
        <div className="h-full overflow-auto">
          <div className="bg-slate-600 px-10 py-6 text-white flex justify-between items-center text">
            <h2 className="text-xl font-semibold">History</h2>
            <button onClick={onClose}>
              <X />
            </button>
          </div>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
