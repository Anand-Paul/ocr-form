import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice = createSlice({
  name: "settings",
  initialState: { lang: "en" },
  reducers: {
    lang: (state, action) => {
      state.lang = action.payload;
    }
  }
});

export default settingsSlice.reducer;
