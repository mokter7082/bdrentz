import React, { useEffect } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setSignOut } from "../redux/slices/authSlice";
import AsyncStorage from "@react-native-async-storage/async-storage";

const DashboardScreen = () => {
  const dispatch = useDispatch();
  const authInfo = useSelector((state) => state.userAuth);

  const removeToken = async () => {
    try {
      await AsyncStorage.removeItem("token", () => {
        dispatch(setSignOut());
      });
      return true;
    } catch (exception) {
      return false;
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
      }}
    >
      <Text>**** Wellcome to Dashboard {authInfo?.userInfo?.name} </Text>
      <TouchableOpacity
        style={{
          backgroundColor: "red",
          paddingHorizontal: 50,
          paddingVertical: 15,
          margin: 10,
        }}
        onPress={() => removeToken()}
      >
        <Text style={{ color: "white" }}>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DashboardScreen;
