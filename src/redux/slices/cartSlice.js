// Slice
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: null,
};

export const cartSlice = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    setItemSuccess: (state, action) => {
      state.items = action.payload;
    },
  },
});

export default cartSlice.reducer;

// Action
const { setItemSuccess } = cartSlice.actions;

export const setCart = (payload) => async (dispatch) => {
  try {
    dispatch(setItemSuccess(payload));
  } catch (e) {
    return console.error(e.message);
  }
};
