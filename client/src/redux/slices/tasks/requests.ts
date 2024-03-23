import { createAsyncThunk } from "@reduxjs/toolkit";
import { ALL_TASK_LISTS } from "../../../mockApi";
// import myAxios from "../../../axios";

export const fetchAllTaskLists = createAsyncThunk(
  "tasks/fetchAllTaskLists",
  async () => {
    const response = {
      data: ALL_TASK_LISTS
    };

    return response.data;
  }
);

