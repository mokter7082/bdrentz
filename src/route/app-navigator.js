import * as React from "react";
// import { createNativeStackNavigator } from "@react-navigation/stack";
import { createStackNavigator } from "@react-navigation/stack";
import DashboardScreen from "../screens/DashboardScreen";
import HireNow from "../screens/HireNow";
import Quotation from "../screens/Quotation";
import DraftQuotation from "../screens/DraftQuotation";
import SuccessMessage from "../screens/SuccessMessage";
import BookingConfirm from "../screens/BookingConfirm";
import Excavators from "../screens/Excavators";
import Excavator from "../screens/Excavator";
import Card from "../screens/Card";

const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};


const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="HireNow">
      <Stack.Screen
        name="HireNow"
        component={HireNow}
        options={{ headerShown: false }}
      />

      {/* <Stack.Screen name="Account" component={AccountScreen} /> */}


      {/* <Stack.Screen 
        name="HireNow" 
        component={HireNow} 
        options={{ headerShown: false }} 
      /> */}

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

      {/* <Stack.Screen 
        name="Excavators" 
        component={Excavators} 
        options={{ headerShown: false }} 
      /> */}
      <Stack.Screen 
        name="Excavator" 
        component={Excavator} 
        options={{ headerShown: false }} 
      />
      {/* <Stack.Screen 
        name="Excavator" 
        component={Excavator} 
        options={{ headerShown: false }} 
      /> */}
      {/* <Stack.Screen 
        name="Card" 
        component={Card} 
        options={{ headerShown: false }} 
      /> */}
      
      <Stack.Screen 
        name="BookingConfirm" 
        component={BookingConfirm} 
        options={{ headerShown: false }} 
      />

      <Stack.Screen
        name="Card"
        component={Card}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};


const ExcavatorsNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Excavators" component={Excavators} options={{headerShown:false}} /> 
    </Stack.Navigator>
  );
}
const CartNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Card" component={Card} options={{headerShown:false}} /> 
    </Stack.Navigator>
  );
}


const SettingsNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}> 
      <Stack.Screen name="Card" component={Card} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}

export { AppNavigator, CartNavigator, SettingsNavigator, ExcavatorsNavigator};


// export default AppNavigator;

