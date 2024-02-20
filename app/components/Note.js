import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../misc/Colors";

const Note = ({ item, onPress }) => {
  const { title, desc } = item;

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
      <Text style={styles.desc} numberOfLines={3}>
        {desc}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.PRIMARY,
    borderRadius: 15,
    marginVertical: 6.5,
    padding: 15,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    color: colors.LIGHT,
  },
  desc: {
    color: colors.LIGHT,
  },
});

export default Note;
