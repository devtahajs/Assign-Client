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
  },
});

export const { addsingle } = taskSlice.actions;
export default taskSlice.reducer;
