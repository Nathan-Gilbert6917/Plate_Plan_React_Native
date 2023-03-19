import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function AddItem({ text, addItem }) {
  return (
    <TouchableWithoutFeedback onPress={() => addItem()}>
      <View style={[styles.container, styles.shadowProp]}>
        <Text style={styles.text}>{text}</Text>
        <View>
          <AntDesign name="pluscircleo" size={24} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
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
