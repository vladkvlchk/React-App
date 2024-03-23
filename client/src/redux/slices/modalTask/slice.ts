import { createSlice } from "@reduxjs/toolkit";
import { ITaskModal } from "../../../types";

const initialState: ITaskModal = {
    taskValue: [],
    isOpen: false,
};

export const tasksSlice = createSlice({
  name: "taskModal",
  initialState,
  reducers: {},
});

export default tasksSlice.reducer;