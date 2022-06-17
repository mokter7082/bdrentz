import React from "react";
import { TouchableOpacity, Text } from "react-native";

export default function Button({ label, onPress,bgColor,color }) {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 15,
        height: 55,
        width: 180,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:bgColor,
      }}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text
        style={{ fontSize: 15, color: color, textTransform: "uppercase" }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}
