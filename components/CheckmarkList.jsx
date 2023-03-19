import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Checkbox from "expo-checkbox";

export default function CheckmarkList({ items }) {
  const [checkedItems, setCheckedItems] = useState(
    new Array(items.length).fill(false)
  );

  const handleCheck = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !checkedItems[index];
    setCheckedItems(newCheckedItems);
  };
  return (
    <View style={styles.container}>
      {items.map((item, index) => (
        <View style={styles.item} key={index}>
          <Checkbox
            style={styles.checkbox}
            value={checkedItems[index]}
            onValueChange={() => handleCheck(index)}
            color={checkedItems[index] ? "#295fa6" : undefined}
          />
          <Text style={styles.label}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  checkbox: {
    marginRight: 10,
  },
  label: {
    fontSize: 16,
    color: "#333",
  },
});
