import { RootState } from "../../store";

export const selectAllTaskLists = (state: RootState) => state.tasks.lists;
export const selectHistory = (state: RootState) => state.tasks.history;