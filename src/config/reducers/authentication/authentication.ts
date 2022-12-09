import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface initialState {}

const initialState: initialState = {
  loading: false,
  isAuthenticated: false,
  loginSuccess: false,
  loginError: false,
  account: {} as any,
  errorMessage: null as unknown as string,
  sessionHasBeenFetched: false,
};

interface IAuthParams {
  privateKey: string;
}

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    logoutSession() {
      return {
        ...initialState,
        showModalLogin: true,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { logoutSession } = authenticationSlice.actions;

export default authenticationSlice.reducer;
