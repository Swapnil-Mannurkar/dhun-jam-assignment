import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice";
import fetchAdminDetails from "./fetchAdminDetails";

const store = configureStore({ reducer: { loginSlice, fetchAdminDetails } });

export default store;
