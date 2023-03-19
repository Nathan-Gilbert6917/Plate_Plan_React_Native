import React from "react";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";

import { StatusBar } from "expo-status-bar";
import { FlatList } from "react-native-gesture-handler";
import RecipeCard from "../RecipeCard";

export default function RecipesScreen({ navigation }) {
  const data = [
    {
      id: "1",
      name:
        "Broiled Double-Thick Lamb Rib Chops With Slicked-Up Store-Bought Mint Jelly Sauce",
      image_url:
        "https://photos.bigoven.com/recipe/hero/lowfat-vegetable-lasagna-1336994.jpg",
      rating: 5,
      total_time: 60,
      servings: 3,
      author: "Nathan Gilbert",
      description: "This is a really delicious recipe that you will love!",
      ingredients: ["1 cup flour", "1/2 cup sugar", "1/2 tsp salt"],
      equipment: ["mixing bowl", "whisk", "measuring cups"],
      instructions: ["1. Preheat the oven to 350°F.", "2. In a mixing bowl..."],
      favorited: true,
    },
    {
      id: "2",
      name: "Text2",
      image_url: "",
      rating: 4.75,
      total_time: 60,
      servings: 3,
      author: "Nathan Allen",
      description: "This is a really delicious recipe that you will love!",
      ingredients: ["sfsdfs", "ertet", "werwelt"],
      equipment: ["mixing bowl", "whisk", "measuring cups"],
      instructions: ["Test232", "2. In a mixing bowl..."],
      favorited: true,
    },
    {
      id: "3",
      name: "Text3",
      image_url: "",
      rating: 3.5,
      total_time: 60,
      servings: 3,
      author: "Nathan Gilbert",
      description: "This is a really delicious recipe that you will love!",
      ingredients: ["1 cup flour", "1/2 cup sugar", "1/2 tsp salt"],
      equipment: ["mixing bowl", "whisk", "measuring cups"],
      instructions: ["1. Preheat the oven to 350°F.", "2. In a mixing bowl..."],
      favorited: true,
    },
    {
      id: "4",
      name: "Text4",
      image_url: "",
      rating: 2.5,
      total_time: 60,
      servings: 3,
      author: "Nathan Gilbert",
      description: "This is a really delicious recipe that you will love!",
      ingredients: ["1 cup flour", "1/2 cup sugar", "1/2 tsp salt"],
      equipment: ["mixing bowl", "whisk", "measuring cups"],
      instructions: ["1. Preheat the oven to 350°F.", "2. In a mixing bowl..."],
      favorited: true,
    },
    {
      id: "5",
      name: "Text5",
      image_url: "",
      rating: 1,
      total_time: 60,
      servings: 3,
      author: "Nathan Gilbert",
      description: "This is a really delicious recipe that you will love!",
      ingredients: ["1 cup flour", "1/2 cup sugar", "1/2 tsp salt"],
      equipment: ["mixing bowl", "whisk", "measuring cups"],
      instructions: ["1. Preheat the oven to 350°F.", "2. In a mixing bowl..."],
      favorited: true,
    },
    {
      id: "6",
      name: "Text6",
      image_url: "",
      rating: 0,
      total_time: 120,
      servings: 3,
      author: "Nathan Gilbert",
      description: "This is a really delicious recipe that you will love!",
      ingredients: ["1 cup flour", "1/2 cup sugar", "1/2 tsp salt"],
      equipment: ["mixing bowl", "whisk", "measuring cups"],
      instructions: ["1. Preheat the oven to 350°F.", "2. In a mixing bowl..."],
      favorited: false,
    },
    {
      id: "7",
      name: "Text7",
      image_url: "",
      rating: 1.45,
      total_time: 60,
      servings: 3,
      author: "Nathan Gilbert",
      description: "This is a really delicious recipe that you will love!",
      ingredients: ["1 cup flour", "1/2 cup sugar", "1/2 tsp salt"],
      equipment: ["mixing bowl", "whisk", "measuring cups"],
      instructions: ["1. Preheat the oven to 350°F.", "2. In a mixing bowl..."],
      favorited: false,
    },
  ];

  const createRecipe = () => {
    console.log("Create Recipe");
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      {/* Header */}
      <View style={[styles.headerSection, styles.shadowProp]}></View>
      <ScrollView style={styles.scroll}>
        {/* My Recipes */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>My Recipes</Text>
          <FlatList
            style={styles.list}
            horizontal
            data={data}
            renderItem={({ item }) => (
              <RecipeCard recipe={item} navigation={navigation} />
            )}
            keyExtractor={(item) => item.id}
          ></FlatList>
        </View>

        {/* Favorite Recipes */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Favorite Recipes</Text>
          <FlatList
            style={styles.list}
            horizontal
            data={data}
            renderItem={({ item }) => (
              <RecipeCard recipe={item} navigation={navigation} />
            )}
            keyExtractor={(item) => item.id}
          ></FlatList>
        </View>

        {/* Create Recipe */}
        <View style={styles.createRecipe}>
          <Button
            title="Create Recipe"
            onPress={() => navigation.navigate("NewRecipeScreen")}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const HEADER_FONT = Platform.OS === "ios" ? "Helvetica Neue" : "Roboto";
const TEXT_FONT = Platform.OS === "ios" ? "Georgia" : "Roboto";

const styles = StyleSheet.create({
  text: {
    padding: 5,
    fontSize: 14,
    color: "white",
  },
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    marginLeft: -20,
    marginRight: -20,
  },
  headerSection: {
    top: -10,
    zIndex: 10,
    left: 0,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: -25,
    backgroundColor: "#295fa6",
    paddingVertical: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
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
  title: {
    fontSize: 24,
  },
  section: {
    paddingTop: 40,
    paddingBottom: 10,
    paddingHorizontal: 20,
  },
  sectionHeader: {
    fontWeight: "bold",
    fontSize: 21,
    fontFamily: HEADER_FONT,
    marginLeft: 20,
  },
  list: {
    alignContent: "center",
  },
  text: {
    padding: 5,
    fontSize: 14,
    fontFamily: TEXT_FONT,
  },
  createRecipe: {
    paddingTop: 20,
    paddingHorizontal: 40,
    paddingBottom: 60,
  },
});
