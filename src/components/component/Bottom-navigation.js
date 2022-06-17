import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import shopLogo from "../../images/icon-02.png";
import bdLogo from "../../images/icon-01.png";
import cardLogo from "../../images/icon-03.png";

export default function BottomNavigation() {
  return (
    <View style={styles.hireBottomArea}>
      <View>
        <Image style={styles.bottomLogo} source={shopLogo} />
      </View>
      <View style={styles.middleLogo}>
        <Image style={styles.bottomLogo} source={bdLogo} />
      </View>
      <View>
        <Image style={styles.bottomLogo} source={cardLogo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hireBottomArea: {
    position: "fixed",
    bottom: 0,
    width: "100%",
    paddingBottom: 10,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-around",
    backgroundColor: "#fff",
  },
  middleLogo: {
    backgroundColor: "#dfe6e9",
    padding: 10,
    borderRadius: 50,
  },
  bottomLogo: {
    width: 40,
    height: 40,
  },
});
