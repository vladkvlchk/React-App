export interface ITaskCard {
  id: string | number;
  title: string;
  description: string;
  dueDate: number;
  priority: "Low" | "Medium" | "High";
  listId: string | number;
}

export interface ITaskList {
  id: string;
  name: string;
  cards: ITaskCard[];
}

export interface ITasks {
  lists: ITaskList[];
  history: [];
}

export interface IModal {
  children: React.ReactNode;
  onCloseModal: (value: null) => void;
}

export interface ISidebar {
  children: React.ReactNode;
  onClose: () => void;
}

export interface ITaskModal{
  taskValue: ITaskCard[],
  isOpen: boolean,
}

export interface IDropdownProps{
  children: React.ReactNode[];
  trigger: React.ReactNode;
}