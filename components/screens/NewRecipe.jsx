import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";

import { StatusBar } from "expo-status-bar";

import firestore from "@react-native-firebase/firestore";

import ImageUpload from "../ImageUpload";

export default function NewRecipe({ navigation }) {
  const [recipe, setRecipe] = useState({
    image_url: "",
    name: "",
    description: "",
    ingredients: [],
    equipment: [],
    instructions: [],
    servings: 0,
    total_time: 0,
    author: "",
    favorited: false,
    rating: 0,
  });

  const [recipeImageURL, setRecipeImageURL] = useState("");

  const updateRecipeField = (fieldName, newValue) => {
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      [fieldName]: newValue,
    }));
  };

  const handleSubmit = async () => {
    try {
      await firestore()
        .collection("recipes")
        .add({ ...recipe });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      {/* Header */}
      <View style={[styles.headerSection, styles.shadowProp]}></View>
      <ScrollView>
        {/* Image */}
        <View style={styles.section}>
          <Text>Upload Image</Text>
          <ImageUpload setRecipeImageURL={setRecipeImageURL} />
        </View>
        {/* Name */}
        <View style={styles.section}>
          <Text>Name</Text>
        </View>
        {/* Servings */}
        <View style={styles.section}>
          <Text>Servings</Text>
        </View>
        {/* Total Time */}
        <View style={styles.section}>
          <Text>Total Time</Text>
        </View>
        {/* Description */}
        <View style={styles.section}>
          <Text>Description</Text>
        </View>

        {/* Ingredients */}
        <View style={styles.section}>
          <Text>Ingredients</Text>
        </View>
        {/* Equipment */}
        <View style={styles.section}>
          <Text>Equipment</Text>
        </View>
        {/* Instructions */}
        <View style={styles.section}>
          <Text>Instructions</Text>
        </View>

        {/* Submit Button */}
        <View style={styles.createRecipe}>
          <Button
            title="Submit Recipe"
            onPress={() => navigation.navigate("RecipeScreen")}
          />
        </View>
      </ScrollView>
    </View>
  );
}
const TEXT_FONT = Platform.OS === "ios" ? "Georgia" : "Roboto";
const styles = StyleSheet.create({
  text: {
    padding: 5,
    fontSize: 14,
    color: "white",
  },
  headerSection: {
    top: -10,
    zIndex: 10,
    left: 0,
    marginBottom: -25,
    backgroundColor: "#295fa6",
    paddingVertical: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  yearSelector: {
    paddingTop: 5,
    alignItems: "center",
  },
  selectDropdown: {
    backgroundColor: "#2a95bf",
    borderRadius: 10,
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
  selectDropdownText: {
    color: "white",
  },
  dropdownStyle: {
    borderRadius: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  list: {},
  pagetTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
  },
  section: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  footer: {
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    paddingBottom: 40,
    padding: 20,
    backgroundColor: "#295fa6",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  footerLink: {
    color: "white",
    fontSize: 14,
  },
  footerButton: {},
  footerIcon: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
    paddingBottom: 5,
  },
});
