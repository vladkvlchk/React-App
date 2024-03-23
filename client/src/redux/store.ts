import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import tasks from "./slices/tasks/slice";

export const store = configureStore({
  reducer: {
    tasks,
  },
});

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;
export const UseAppDispatch = () => useDispatch<AppDispatch>();
