import { createSlice } from "@reduxjs/toolkit";
interface CounterState {
  count: number;
}
import type { PayloadAction } from "@reduxjs/toolkit";
const initialState: CounterState = { count: 0 };

const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    incrementBypayload: (state, action: PayloadAction<number>) => {
      state.count = state.count + action.payload;
    },
  },
});

export const { increment, decrement, incrementBypayload } =
  CounterSlice.actions;

export default CounterSlice.reducer;
