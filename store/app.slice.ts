import { AppInitialStateType } from "@/utils/enum";
import { createSlice } from "@reduxjs/toolkit";

const initialState: AppInitialStateType = {
  isOpen: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setOpenTrue: (state) => {
      state.isOpen = true;
    },
    setOpenFalse: (state) => {
      state.isOpen = false;
    },
    setToggleOpen: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { setOpenTrue, setOpenFalse, setToggleOpen } = appSlice.actions;
export default appSlice.reducer;
