import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./Slices/AuthSlice";
import Assignmentslice from "./Slices/Assignmentslice.js";
import taskSlice from "./taskhandleSlice/taskSlice";

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    assign: Assignmentslice,
    task: taskSlice,
  },
});

export default store;
