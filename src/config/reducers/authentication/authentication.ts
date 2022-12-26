import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CryptoUtil } from "../../../common/crypto/crypto.util";
import { request } from "../../../services/axios/axios";
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

export const authenticate = createAsyncThunk("authentication/login", async (privateKey: string) => {
  const requestTime = new Date().getTime();
  const signingResult = CryptoUtil.signing(privateKey, requestTime.toString());
  const { headers } = request.headers(
    signingResult.publicKey.toString(),
    requestTime.toString(),
    signingResult.signature
  );
  const response = await login(headers);
  localStorage.setItem("headers", JSON.stringify(headers));
  return response;
});

export const authenticationSlice = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    logoutSession() {
      return {
        ...initialState,
        isAuthenticated: false,
        loginSuccess: false,
        loginError: false,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authenticate.fulfilled, (state, action) => {
        return {
          ...state,
          loginError: false,
          loginSuccess: true,
          isAuthenticated: true,
          account: action.payload.data.data,
        };
      })
      .addCase(authenticate.rejected, (state, action) => ({
        ...initialState,
        loginError: true,
        errorMessage: action.error.message,
      }));
  },
});

// Action creators are generated for each case reducer function
export const { logoutSession } = authenticationSlice.actions;

export default authenticationSlice.reducer;
