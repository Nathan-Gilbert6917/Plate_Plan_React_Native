import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { Entypo } from "@expo/vector-icons";

const QuantitySelector = ({ quantity, onIncrement, onDecrement, onRemove }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {quantity === 0 ? (
          <TouchableOpacity onPress={onRemove}>
            <Entypo name="cross" size={24} color="red" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={onDecrement} disabled={quantity === 0}>
            <Entypo
              name="minus"
              size={24}
              color={quantity === 0 ? "grey" : "black"}
            />
          </TouchableOpacity>
        )}

        <Text style={{ marginHorizontal: 16 }}>{quantity}x</Text>
        <TouchableOpacity onPress={onIncrement}>
          <Entypo name="plus" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default QuantitySelector;
