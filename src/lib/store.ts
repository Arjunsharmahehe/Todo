import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import tasksReducer from "./tasksSlice";
import authReducer from "./authSlice";
import quoteReducer from './quoteSlice'

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    auth: authReducer,
    quote: quoteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: <T>(selector: (state: RootState) => T) => T = useSelector;
