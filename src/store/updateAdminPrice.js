import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initalData = {
  status: "Idle",
  error: null,
};

export const updateAdminPriceThunk = createAsyncThunk(
  "updateAdminPriceThunk",
  async ({
    CustomValue6,
    CustomValue7,
    CustomValue8,
    CustomValue9,
    CustomValue10,
    id,
  }) => {
    fetch(`https://stg.dhunjam.in/account/admin/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        amount: {
          category_6: CustomValue6,
          category_7: CustomValue7,
          category_8: CustomValue8,
          category_9: CustomValue9,
          category_10: CustomValue10,
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
