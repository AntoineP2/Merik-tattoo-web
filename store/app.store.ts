import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./app.slice";

const reducers = {
  app: appSlice,
};

const appStore = configureStore({
  reducer: reducers,
});

export type RootState = ReturnType<typeof appStore.getState>;
export default appStore;
