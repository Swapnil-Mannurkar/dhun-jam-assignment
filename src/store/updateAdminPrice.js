import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initalData = {
  status: "Idle",
  error: null,
};

export const updateAdminPriceThunk = createAsyncThunk(
  "updateAdminPriceThunk",
  async (value) => {
    fetch("https://stg.dhunjam.in/account/admin/4", {
      method: "PUT",
      body: JSON.stringify({
        amount: {
          category_6: value,
        },
      }),
    });
  }
);

const updateAdminPriceSlice = createSlice({
  name: "updateAdminPriceSlice",
  initialState: initalData,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateAdminPriceThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateAdminPriceThunk.fulfilled, (state) => {
        state.status = "success";
      })
      .addCase(updateAdminPriceThunk.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.message;
      });
  },
});

export const updateAdminPriceSliceAction = updateAdminPriceSlice.actions;
export default updateAdminPriceSlice.reducer;
