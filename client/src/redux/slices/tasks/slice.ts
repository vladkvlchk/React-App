import { createSlice } from "@reduxjs/toolkit";
import { ITasks } from "../../../types";
import { fetchAllTaskLists } from "./requests";

const initialState: ITasks = {
    lists: [],
    history: [],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllTaskLists.fulfilled, (state, action) => {
      state.lists = action.payload;
    });

//     builder.addCase(fetchLot.fulfilled, (state, action) => {
//       state.lot = action.payload;
//     });

//     builder.addCase(updateLot.fulfilled, (state, action) => {
//       state.lot = action.payload;
//     });

//     builder.addCase(createLot.fulfilled, (state, action) => {
//       state.lots = [...state.lots, action.payload];
//     });
  },
});

export default tasksSlice.reducer;