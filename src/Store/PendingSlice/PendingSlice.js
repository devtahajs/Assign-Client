import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { sendpend, getPending, deletePending } from "./PendingService";
// ------------------------***----------------------

//?initial State
const initialState = {
  data: null,
  pendingData: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};
// ------------------------------***--------------------
//Creating Async Thunk
//? Sending Pending
export const sendPending = createAsyncThunk(
  "sendpending/post",
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await sendpend(data, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//? getting Pending
export const getPendingData = createAsyncThunk(
  "pendingdata/get",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await getPending(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//?Deleting Pending
export const DeletePendingData = createAsyncThunk(
  "pendingdatadelete/delete",
  async (id, thunkAPI) => {
    try {
      return await deletePending(id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//?creating Slice Now
export const PendingSlice = createSlice({
  name: "pendingSlice",
  initialState,
  reducers: {
    resetpending: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },

  extraReducers: (builder) => {
    builder
      //?Sending Pending Data To Server
      .addCase(sendPending.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(sendPending.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = action.payload;
      })
      .addCase(sendPending.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.data = null;
      })
      //? getting pending Data From Server
      .addCase(getPendingData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getPendingData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.pendingData = action.payload;
      })
      .addCase(getPendingData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        state.pendingData = null;
      })
      .addCase(DeletePendingData.fulfilled, (state, action) => {
        state.data = action.payload;
      });
  },
});

export const { resetpending } = PendingSlice.actions;
export default PendingSlice.reducer;
