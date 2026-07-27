import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
  name: 'counter',
  // this is a state for holding data
  initialState: {
    count: 0,
  },
  // here is action for updating the state
  reducers: {
    increment: (state, action) => {
      console.log(action);
      
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
  }
});

console.log(`Slice: ${counterSlice.name}`);

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;


