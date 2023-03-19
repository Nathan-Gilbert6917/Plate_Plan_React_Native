import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function FavoriteButton({ isFavorite, onPress }) {
  const [favorite, setFavorite] = useState(isFavorite);

  const handlePress = () => {
    setFavorite(!favorite);
    onPress(!favorite);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <Ionicons
          name={favorite ? "heart" : "heart-outline"}
          size={24}
          color={favorite ? "red" : "black"}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: 38,
    borderRadius: 50,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
});

export default FavoriteButton;
