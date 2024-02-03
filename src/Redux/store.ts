import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./feautures/CounterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
