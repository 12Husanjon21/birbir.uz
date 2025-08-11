import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "profile",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export default userSlice.reducer;
export const { login, logout } = userSlice.actions;
