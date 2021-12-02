import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

// --- Counter Slicer --- //
const counterSlicer = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    // We are allowed to mutate the state in all the reducers logic.
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// --- Counter Actions --- //
export const counterActions = counterSlicer.actions;

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

// Multiple slicers (reducers)
const store = configureStore({
  reducer: {
    counter: counterSlicer.reducer,
    auth: authSlicer.reducer,
  },
});

export default store;
