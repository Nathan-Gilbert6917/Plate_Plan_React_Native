import React from "react";
import { View, Text, Image, StyleSheet, Pressable } from "react-native";

import StarRatings from "./StarRatings";
import { Ionicons } from "@expo/vector-icons";

const PLACEHOLDER = "../assets/recipe_placeholder.jpg";

export default function RecipeCard({ recipe, navigation }) {
  const { name, rating, image_url, total_time, servings, favorited } = recipe;

  return (
    <Pressable
      style={styles.footerButton}
      onPress={() =>
        navigation.navigate("RecipeScreen", {
          ...recipe,
          navigation,
        })
      }
    >
      <View style={styles.container}>
        {image_url ? (
          <Image style={styles.image} source={{ uri: image_url }} />
        ) : (
          <Image style={styles.image} source={require(PLACEHOLDER)} />
        )}
        <Ionicons
          style={styles.favorited}
          name={favorited ? "heart" : "heart-outline"}
          size={24}
          color={favorited ? "red" : "black"}
        />
        <Text style={styles.name} numberOfLines={2}>
          {name}
        </Text>
        <View style={styles.ratingContainer}>
          <StarRatings value={rating}></StarRatings>
        </View>
        <View style={styles.subtext}>
          <Text style={styles.time}>{total_time} minutes</Text>
          <Text style={styles.time}>{servings} servings</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 4,
    margin: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    width: 275,
    maxWidth: 275,
  },
  image: {
    height: 175,
    resizeMode: "cover",
    width: "100%",
  },
  name: {
    fontSize: 18,
    marginVertical: 8,
    paddingHorizontal: 16,
    flexWrap: "wrap",
    textAlign: "center",
  },
  ratingContainer: {
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
    marginHorizontal: 16,
    marginBottom: 8,
    padding: 8,
    alignItems: "center",
  },
  rating: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  time: {
    color: "#777",
    fontSize: 16,
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  subtext: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  favorited: {
    fontSize: 24,
    marginRight: 4,
    position: "absolute",
    top: 10,
    right: 10,
  },
});
