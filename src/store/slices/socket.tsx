import { createSlice } from "@reduxjs/toolkit";

const socketSlice = createSlice({
  name: "socket",
  initialState: false, // is connected ??
  reducers: {
    changeStatus(state, action) {
      return action.payload;
    },
  },
});

export const { changeStatus } = socketSlice.actions;
export default socketSlice.reducer;
