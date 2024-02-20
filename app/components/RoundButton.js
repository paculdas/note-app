import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import colors from "../misc/Colors";
import { Entypo } from "@expo/vector-icons";

export default function RoundButton({
  iconDesignName,
  size,
  color,
  onPress,
  style,
}) {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
    >
      <Entypo
        name={iconDesignName}
        size={size || 24}
        color={color || colors.LIGHT}
        style={styles.icon}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 50,
    elevation: 5,
    backgroundColor: colors.PRIMARY,
  },
  icon: {
  },
});
