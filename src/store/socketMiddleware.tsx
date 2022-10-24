import type { PayloadAction } from "@reduxjs/toolkit";
import { Store } from "redux";
import { io } from "socket.io-client";

import { changeStatus } from "store/slices/socket";
import { changeChannel, updateChannelsList } from "store/slices";
import { Channel } from "types";

const host = "http://127.0.0.1:3001";
const socket = io(host, {
  transports: ["websocket", "polling"],
});

export function chatMiddleware() {
  return (next: any) => (action: PayloadAction) => {
    return next(action);
  };
}

export default function Middleware(store: Store) {
  socket.on("connected", () => {
    store.dispatch(changeStatus(true));
  });

  socket.on("disconnected", () => {
    store.dispatch(changeStatus(false));
  });

  socket.on("currentChannel", (value: string) => {
    store.dispatch(changeChannel(value));
  });

  socket.on("channelsList", (list: Channel[]) => {
    store.dispatch(updateChannelsList(list));
  });
}
