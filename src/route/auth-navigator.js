import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
import RegisterScreen from "../screens/RegisterScreen";
import Home from "../screens/Home";
import Otp from "../screens/Otp";
import HireNow from "../screens/HireNow";
import Quotation from "../screens/Quotation";
import DraftQuotation from "../screens/DraftQuotation";
import SuccessMessage from "../screens/SuccessMessage";
import BookingConfirm from "../screens/BookingConfirm";
import Excavators from "../screens/Excavators";
import Excavator from "../screens/Excavator";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Otp" 
        component={Otp} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="HireNow" 
        component={HireNow} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Quotation" 
        component={Quotation} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="DraftQuotation" 
        component={DraftQuotation} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="SuccessMessage" 
        component={SuccessMessage} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Excavators" 
        component={Excavators} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="Excavator" 
        component={Excavator} 
        options={{ headerShown: false }} 
      />
      <Stack.Screen 
        name="BookingConfirm" 
        component={BookingConfirm} 
        options={{ headerShown: false }} 
      />

      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
