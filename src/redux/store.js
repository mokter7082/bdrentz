import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import authSlice from "./slices/authSlice";

export const rootReducer = combineReducers({
  userAuth: authSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export default store;
