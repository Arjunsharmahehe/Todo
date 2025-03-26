// import { createSlice } from "@reduxjs/toolkit";

// type AuthState = {
//   isAuthenticated: boolean;
// };

// const initialState: AuthState = {
//   isAuthenticated: false,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     login: (state) => {
//       state.isAuthenticated = true;
//     },
//     logout: (state) => {
//       state.isAuthenticated = false;
//     },
//   },
// });

// export const { login, logout } = authSlice.actions;
// export default authSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const loadAuthState = () => {
  if (typeof window !== "undefined") {
    const storedUser = localStorage.getItem("authUser");
    return storedUser ? JSON.parse(storedUser) : null;
  }
  return null;
};

interface AuthState {
  user: string | null; // Can be expanded to store more user data
}

const initialState: AuthState = {
  user: loadAuthState(),
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.user = action.payload;
      localStorage.setItem("authUser", JSON.stringify(state.user));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("authUser");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
