import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getComps, sendComps } from "./completedservice";
// ------------------------***----------------------

//?initial State
const initialState = {
  data: null,
  CompletedData: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

// ------------------------------***--------------------
//Creating Async Thunk
//? Sending Completed
export const sendCompleted = createAsyncThunk(
  "sendcompleted/post",
  async (data, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await sendComps(data, token);
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

//? getting Completed
export const getCompletedData = createAsyncThunk(
  "Completeddata/get",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await getComps(token);
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
export const CompletedSlice = createSlice({
  name: "CompletedSlice",
  initialState,
  reducers: {
    resetComps: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },

  extraReducers: (builder) => {
    builder
      //?Sending Completed Data To Server
      .addCase(sendCompleted.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(sendCompleted.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = action.payload;
      })
      .addCase(sendCompleted.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.data = null;
      })
      //? getting pending Data From Server
      .addCase(getCompletedData.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getCompletedData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.pendingData = action.payload;
      })
      .addCase(getCompletedData.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
        state.pendingData = null;
      });
  },
});

export const { resetComps } = CompletedSlice.actions;
export default CompletedSlice.reducer;
