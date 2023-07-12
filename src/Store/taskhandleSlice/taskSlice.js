import { createSlice } from "@reduxjs/toolkit";

//Initial state
const initialState = {
  single: [],
  isPending: [],
  completed: [],
  category: [],
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
    category: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { addsingle, pendingtask, category } = taskSlice.actions;
export default taskSlice.reducer;
