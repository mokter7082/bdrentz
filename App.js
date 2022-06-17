import React, { Fragment } from "react";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import AppRoute from "./src/route";
import { store } from "./src/redux/store";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Request interceptor
axios.defaults.baseURL = "http://128.199.168.249/healthms/api"; //http://192.168.0.102/healthms/api
const liveUrl = "http://128.199.168.249/healthms/api";

axios.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = "Bearer " + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// For Response interceptor
axios.interceptors.response.use(
  (response) => {
    if (response?.status === 201) {
      console.log("Successfully");
    }
    return response;
  },
  (error) => {
    return Promise.reject(error?.response);
  }
);

export default function App() {
  return (
    <Provider store={store}>
      <AppRoute />
      <StatusBar style="auto" />
    </Provider>
  );
}
