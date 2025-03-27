import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Helper function to authenticate the user

const loadAuthState = () => {
  // Check if running is a browser
  if (typeof window !== "undefined") {
    const storedUser = localStorage.getItem("authUser");
    // Parses the JSON data or returns NULL
    return storedUser ? JSON.parse(storedUser) : null;
  }
  return null;
};

// Defines the structure of the Auth state
interface AuthState {
  user: string | null; // Can be expanded to store more user data
}

// Initial structure of the auth slice
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
