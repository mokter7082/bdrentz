import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function BtnEquipment({ label, onPress,bgColor,color='#fff', fontSize=15 }) {
  return (
    <TouchableOpacity
    style={{
      borderRadius: 15,
      height: 45,
      paddingLeft:20,
      paddingRight:20,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor:bgColor,
    }}
    activeOpacity={0.7}
    onPress={onPress}
  >
    <Text
      style={{ fontSize, color, textTransform: "capitalize" }}
    >
      {label}
    </Text>
  </TouchableOpacity>
  )
}