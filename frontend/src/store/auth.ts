import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: AuthSliceState = {
  isAuth: false,
};

const slice = createSlice({
  name: "auth",
  reducers: {
    setAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
  },

  initialState,
});

export const authActions = slice.actions;
export default slice.reducer;