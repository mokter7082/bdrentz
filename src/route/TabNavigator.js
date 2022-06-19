import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AppNavigator, CartNavigator, SettingsNavigator } from "./app-navigator";
import { color } from "react-native-reanimated";
import leftIcon from "../images/icon-02.png"
import leftMiddle from "../images/icon-01.png"
import leftRight from "../images/icon-03.png"
import { Image, StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator 
       initialRouteName="Dashboard"
       screenOptions={({route})=>({
        tabBarActiveTintColor:"red",
        tabBarInactiveTintColor:"red",
        headerShown:false,
        tabBarStyle:{
          paddingVertical:0,
          height:50,
          backgroundColor:"white"
        }
       })}
    >
      <Tab.Screen name="Dashboard"
       component={AppNavigator} 
       options={{ headerShown: false,
       tabBarIcon:({color,size})=>(
        <Image style={styles.Icon} source={leftIcon} />
       )
      }}
       />
      <Tab.Screen name="Cart"
       component={CartNavigator}
       options={{ headerShown: false,
        tabBarIcon:({color,size})=>(
         <Image style={styles.Icon} source={leftMiddle} />
        )
       }}
        />
      <Tab.Screen name="Settings"
       component={SettingsNavigator}
       options={{ headerShown: false,
        tabBarIcon:({color,size})=>(
         <Image style={styles.Icon} source={leftRight} />
        )
       }}
          />
      </Tab.Navigator>
  );
};

export default BottomTabNavigator;


const styles =StyleSheet.create({
  Icon:{
    height:50,
    width:50,
  }
})