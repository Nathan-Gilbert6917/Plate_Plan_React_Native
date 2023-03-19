import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function ExpenseItem({ text }) {
  return (
    <View style={[styles.empty, styles.shadowProp]}>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  empty: {
    flexDirection: "column",
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginVertical: 5,
    borderWidth: 0,
    borderRadius: 10,
    backgroundColor: "white",
  },
  shadowProp: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
