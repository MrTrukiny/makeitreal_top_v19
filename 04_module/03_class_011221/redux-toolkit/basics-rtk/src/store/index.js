import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };

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
// counterSlicer.actions.
// export const { increment, decrement, increase, toggle } = counterSlicer.actions;
export const counterActions = counterSlicer.actions;

// Just one slice (reducer)
const store = configureStore({
  reducer: counterSlicer.reducer,
});

export default store;
