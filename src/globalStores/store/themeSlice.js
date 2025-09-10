import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  count: 0,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    toggleCount: (state) => {
      state.count = state.count + 1;
    },
  },
});

export const { toggleTheme, toggleCount } = themeSlice.actions;

export default themeSlice.reducer;
