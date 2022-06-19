import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import {  CartNavigator,ExcavatorsNavigator, SettingsNavigator } from "./app-navigator";

import TabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={TabNavigator} />
      <Drawer.Screen name="Excavators" component={ExcavatorsNavigator} />
      <Drawer.Screen name="Cart" component={CartNavigator} />
      <Drawer.Screen name="Settings" component={SettingsNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;