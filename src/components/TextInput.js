import React, { forwardRef } from "react";
import { TextInput as RNTextInput, View, StyleSheet } from "react-native";
import { Entypo as Icon } from "@expo/vector-icons";

const TextInput = forwardRef(({ icon, error, touched, ...otherProps }, ref) => {
  const validationColor = !touched ? "#f2f2f2" : error ? "#FF5A5F" : "#f2f2f2";
  const textColor = !touched ? "#333" : error ? "#FF5A5F" : "#333";

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        height: 55,
        borderRadius: 10,
        borderColor: validationColor,
        borderWidth: StyleSheet.hairlineWidth,
        padding: 10,
        backgroundColor: "#fff",
      }}
    >
      <View style={{ padding: 8 }}>
        <Icon name={icon} color={textColor} size={16} />
      </View>
      <View style={{ flex: 1 }}>
        <RNTextInput
          underlineColorAndroid="transparent"
          placeholderTextColor="rgba(34, 62, 75, 0.7)"
          ref={ref}
          {...otherProps}
        />
      </View>
    </View>
  );
});

export default TextInput;
