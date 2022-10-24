import { createSlice } from "@reduxjs/toolkit";
import img1 from "assets/1.jpg";
import img2 from "assets/2.jpg";
import img3 from "assets/3.jpg";
import { Channel } from "types";

const imgArr = [img1, img2, img3];

const channelSlice = createSlice({
  name: "channel",
  initialState: {
    current: 0,
    list: [],
  },
  reducers: {
    changeChannel(state, action) {
      return {
        ...state,
        current: action.payload,
      };
    },
    updateChannelsList(state, action) {
      const enhanced = action.payload.map((channel: Channel) => {
        const idx = Math.floor(Math.random() * 3);
        return { ...channel, img: imgArr[idx] };
      });
      return {
        ...state,
        list: enhanced,
      };
    },
  },
});

export const { changeChannel, updateChannelsList } = channelSlice.actions;
export default channelSlice.reducer;
