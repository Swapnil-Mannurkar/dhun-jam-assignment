import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialData = {
  status: "Idle",
  data: [],
  error: null,
};

export const fetchAdminDetailsThunk = createAsyncThunk(
  "fetchAdminDetails",
  async (id) => {
    let response = await fetch(`https://stg.dhunjam.in/account/admin/${id}`);
    return await response.json();
  }
);

const fetchAdminDetailsSlice = createSlice({
  name: "fetchAdminDetailsSlice",
  initialState: initialData,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdminDetailsThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAdminDetailsThunk.fulfilled, (state, action) => {
        state.status = action.payload.response;
        state.data = action.payload.data;
      })
      .addCase(fetchAdminDetailsThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const fetchAdminDetailsAction = fetchAdminDetailsSlice.actions;
export default fetchAdminDetailsSlice.reducer;
