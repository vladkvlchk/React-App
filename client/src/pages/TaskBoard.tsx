import { History, Plus } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FullTask from "../components/FullTask";
import Modal from "../components/Modal";
import Sidebar from "../components/Sidebar";
import TaskList from "../components/TaskList";
import { fetchAllTaskLists } from "../redux/slices/tasks/requests";
import { selectAllTaskLists } from "../redux/slices/tasks/selector";
import { UseAppDispatch } from "../redux/store";

const TaskBoard: React.FC = () => {
  const appDispatch = UseAppDispatch();
  const lists = useSelector(selectAllTaskLists);
  const [isModalOpened, setModalOpened] = useState<boolean>(false);
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const handleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  const handleModal = () => {
    setModalOpened((prev) => !prev);
  };

  useEffect(() => {
    appDispatch(fetchAllTaskLists());
  }, []);

  return (
    <main className="flex flex-col h-screen">
      <div className="flex justify-between w-full">
        <h1 className="text-2xl font-bold mt-16 mx-12 mb-8">My Task Board</h1>
        <div className="flex self-end mt-16 mx-12 mb-8">
          <button
            className="mx-3 border rounded-md py-2 px-4 flex"
            onClick={handleSidebar}
          >
            <History />
            <p className="ml-2">History</p>
          </button>
          <button
            className="mx-3 border rounded-md py-2 px-4 bg-slate-700 text-white flex"
            onClick={handleModal}
          >
            <Plus />
            <p className="ml-1">Create New List</p>
          </button>
        </div>
      </div>
      <div className="flex overflow-x-scroll mx-12 flex-1 mb-2">
        {lists ? (
          lists.map((list) => <TaskList key={list.id} {...list} />)
        ) : (
          <div>no list</div>
        )}
      </div>
      {isModalOpened && (
        <Modal onCloseModal={handleModal}>
          <FullTask />
        </Modal>
      )}
      {isSidebarOpen && <Sidebar onClose={handleSidebar}>aaa</Sidebar>}
    </main>
  );
};

export default TaskBoard;
