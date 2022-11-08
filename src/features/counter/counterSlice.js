import React from "react";
import { createSlice } from "@reduxjs/toolkit";

let errMsg = `Can't do this operation when the value is less than '0'`;

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      if (isNaN(state.value)) {
        state.value = 0;
      } else {
        state.value += 1;
      }
    },
    increment2: (state) => {
      state.value += 10;
    },
    decrement: (state) => {
      state.value > 0
        ? (state.value -= 1)
        : (state.value = errMsg);
    },
    decrement2: (state) => {
      state.value > 0
        ? (state.value -= 10)
        : (state.value = errMsg);
    },
    multiply: (state) => {
      state.value > 0
        ? (state.value *= 2)
        : (state.value = errMsg);
    },
    multiply2: (state) => {
      state.value > 0
        ? (state.value *= 5)
        : (state.value = errMsg);
    },
    division: (state) => {
      state.value > 0
        ? (state.value /= 2)
        : (state.value = errMsg);
    },
    division2: (state) => {
      state.value > 0
        ? (state.value /= 5)
        : (state.value = errMsg);
    },
  },
});

export const {
  increment,
  increment2,
  decrement,
  decrement2,
  multiply,
  multiply2,
  division,
  division2,
} = counterSlice.actions;

export default counterSlice.reducer;
