import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../../../services/user";

export interface initialState {}

const initialState: initialState = {
  loading: false,
  isAuthenticated: false,
  loginSuccess: false,
  loginError: false,
  account: {} as any,
  errorMessage: null as unknown as string,
};

interface IAuthParams {
  privateKey: string;
}

export const authenticate = createAsyncThunk(
  "authentication/login",
  async (userId: string, thunkAPI) => {
    const response = await login(userId);
    return response;
  }
);

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
  extraReducers: (builder) => {
    builder
      .addCase(authenticate.fulfilled, (state, action) => ({
        ...initialState,
        loginError: false,
        loginSuccess: true,
        isAuthenticated: true,
      }))
      .addCase(authenticate.rejected, (state, action) => ({
        ...initialState,
        loginError: true,
      }));
  },
});

// Action creators are generated for each case reducer function
export const { logoutSession } = authenticationSlice.actions;

export default authenticationSlice.reducer;
