import { createSlice } from "@reduxjs/toolkit";

//Initial state
const initialState = {
  single: [],
  isPending: [],
  completed: [],
};

//creating Slice
export const taskSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    addsingle: (state, action) => {
      state.single = action.payload;
    },
    pendingtask: (state, action) => {
      state.isPending.push(action.payload);
    },
  },
});

export const { addsingle, pendingtask } = taskSlice.actions;
export default taskSlice.reducer;
