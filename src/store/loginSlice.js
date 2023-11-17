import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialData = {
  status: "Idle",
  data: [],
  error: null,
};

export const loginThunk = createAsyncThunk("loginThunk", async (inputData) => {
  const response = await fetch("https://stg.dhunjam.in/account/admin/login", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      username: inputData.username,
      password: inputData.password,
    }),
  });

  const responseData = await response.json();
  return responseData;
});

const loginSlice = createSlice({
  name: "loginSlice",
  initialState: initialData,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.status = action.payload.response;
        state.data = action.payload.data;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const loginAction = loginSlice.actions;
export default loginSlice.reducer;
