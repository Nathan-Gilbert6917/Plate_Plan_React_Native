import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import { Entypo } from "@expo/vector-icons";

const RemovableItemList = ({ items, onRemoveItem }) => {
  return (
    <View style={{ flexDirection: "column", flexWrap: "wrap" }}>
      {items.map((item, index) => (
        <View
          key={index}
          style={{
            backgroundColor: "#00000008",
            borderRadius: 10,
            padding: 10,
            margin: 5,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={() => onRemoveItem(index)}>
            <Entypo name="cross" size={24} color="red" style={styles.cross} />
          </TouchableOpacity>
          <Text style={styles.text}>{item}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  cross: {
    marginRight: 5,
  },
  text: {
    width: "90%",
  },
});

export default RemovableItemList;
