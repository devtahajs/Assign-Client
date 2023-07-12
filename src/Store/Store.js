import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./Slices/AuthSlice";
import Assignmentslice from "./Slices/Assignmentslice.js";
import taskSlice from "./taskhandleSlice/taskSlice.js";
import PendingSlice from "./PendingSlice/PendingSlice.js";
// -------------------------***--------------------------------

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    assign: Assignmentslice,
    task: taskSlice,
    pending: PendingSlice,
  },
});

export default store;
