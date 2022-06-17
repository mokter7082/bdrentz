import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setSignIn } from "../redux/slices/authSlice";

import AppNavigator from "./app-navigator";
import AuthNavigator from "./auth-navigator";

const AppRoute = () => {
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const authInfo = useSelector((state) => state.userAuth);

  const getUserInfo = async () => {
    try {
      //get token from local storage
      const value = await AsyncStorage.getItem("token");

      if (value !== null) {
        //get profile info from api
        await axios
          .get("/profile")
          .then(async (response) => {
            dispatch(setSignIn(response.data));
            setIsLoggedIn(true);
          })
          .catch((error) => {
            console.log(error);
            setIsLoggedIn(false);
          });
      } else {
        setIsLoggedIn(false);
      }
    } catch (error) {
      setIsLoggedIn(false);
    }
  };

  const checkAuthentication = () => {
    if (authInfo.userInfo) {
      setIsLoggedIn(authInfo.isLoggedIn);
    } else {
      getUserInfo();
    }
  };

  React.useEffect(() => {
    checkAuthentication();
  }, [authInfo.token]);

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppRoute;
