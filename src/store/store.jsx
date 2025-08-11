import UserSlice from "./userSlice";
import { configureStore } from "@reduxjs/toolkit";

const reducer = {
  project: UserSlice,
};

export const store = configureStore({
  reducer,
});
