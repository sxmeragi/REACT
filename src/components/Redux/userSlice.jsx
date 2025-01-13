import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Profile Name",
  status: "Profile Status",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
    updateStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setUser, updateStatus } = userSlice.actions;
export default userSlice.reducer;
