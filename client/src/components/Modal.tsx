import { X } from "lucide-react";
import React from "react";
import { IModal } from "../types";

const Modal: React.FC<IModal> = ({ children, onCloseModal }) => {
  const handleCloseModal = () => onCloseModal(null);

  return (
    <div
      onClick={handleCloseModal}
      className="fixed inset-0 z-50 overflow-auto bg-gray-900 bg-opacity-50 backdrop-blur-sm justify-center items-center flex hover:cursor-pointer"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="z-60 bg-white rounded-2xl m-12 hover:cursor-default"
      >
        <div className="min-w-60 bg-slate-600 flex justify-end rounded-t-2xl p-3">
          <button onClick={handleCloseModal} className="h-6">
            <X />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
