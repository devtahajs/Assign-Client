import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//Axios Service Get Assignments
const axiosGet = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(
    "https://assign-server.onrender.com/assign/get",
    config
  );
  return response.data;
};

//?Axios Service Delete  Data
const deleteAssign = async (id) => {
  const response = await axios.delete(
    `https://assign-server.onrender.com/assign/deleteassign/${id}`
  );
  return response.data;
};

// !------------------------------------***---------------------------
//Async Thunk Get Assignments
export const getAssign = createAsyncThunk(
  "assignment/get",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await axiosGet(token);
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
export const DeleteAssignData = createAsyncThunk(
  "Assigndatadelete/delete",
  async (id, thunkAPI) => {
    try {
      return await deleteAssign(id);
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

//initial State
const initialState = {
  data: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//creating Slice Now
export const AssignmentSlice = createSlice({
  name: "AssignmentSlice",
  initialState,
  reducers: {
    addfilterdata: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAssign.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getAssign.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = action.payload;
      })
      .addCase(getAssign.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.data = null;
      })
      .addCase(DeleteAssignData.fulfilled, (state, action) => {
        state.message = action.payload;
      });
  },
});

export const { addfilterdata } = AssignmentSlice.actions;
export default AssignmentSlice.reducer;
