import { createSlice } from '@reduxjs/toolkit';

// --- Auth Slicer --- //
const initialAuthState = { isAuthenticated: false };
const authSlicer = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// --- Auth Actions --- //
export const authActions = authSlicer.actions;

export default authSlicer.reducer;
