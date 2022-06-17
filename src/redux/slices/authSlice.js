import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  userInfo: null,
  token: null,
};

const authSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload.token;
    },

    setSignIn: (state, action) => {
      state.userInfo = action.payload.profile;
      state.isLoggedIn = action.payload.isLoggedIn;
    },

    setSignOut: (state) => {
      state.userInfo = null;
      state.isLoggedIn = false;
      state.token = false;
    },
  },
});

export const { setToken, setSignIn, setSignOut } = authSlice.actions;

export const selectUserInfo = (state) => state.userAuth.userInfo;
export const getToken = (state) => state.userAuth.token;
// export const selectUserName = (state) => state.userAuth.userName;
// export const selectIsLoggedIn = (state) => state.userAuth.isLoggedIn;

export default authSlice.reducer;
