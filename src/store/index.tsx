import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import channelReducer from "./slices";
import socketReducer from "./slices/socket";
import socket, { chatMiddleware } from "./socketMiddleware";

export const store = configureStore({
  reducer: {
    channel: channelReducer,
    socket: socketReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(chatMiddleware),
});

socket(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
