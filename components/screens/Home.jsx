import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";

import { FlatList } from "react-native-gesture-handler";
import RecipeCard from "../RecipeCard";

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
    ingredients: ["Testest", "1sfsfsr", "1/2fsfslt"],
    equipment: ["mixing bowl", "whisk", "measuring cups"],
    instructions: ["1. Preheat the oven to 350°F.", "2. In a mixing bowl..."],
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

const Favorites = [];

const TopFiveRecipes = [];

const MainDishes = [];

const SideDishes = [];

const AppsSnacks = [];

const SoupsStews = [];

const Desserts = [];

const Salads = [];

const Beverages = [];

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={[styles.headerSection, styles.shadowProp]}></View>
      <ScrollView style={styles.scroll}>
        {/* Favorites */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Favorites</Text>
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

        {/* Top 5 Recipes*/}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Top 5 Recipes</Text>
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

        {/* Main Dishes */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Main Dishes</Text>
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

        {/* Side Dishes */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Side Dishes</Text>
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

        {/* Appetizers and Snacks */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Appetizers and Snacks</Text>
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

        {/* Soups and Stews */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Soups and Stews</Text>
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

        {/* Desserts */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Desserts</Text>
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

        {/* Salads */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Salads</Text>
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

        {/* Beverages */}
        <View style={styles.section}>
          <Text style={styles.sectionHeader}>Beverages</Text>
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
      </ScrollView>
    </View>
  );
}

const HEADER_FONT = Platform.OS === "ios" ? "Helvetica Neue" : "Roboto";
const TEXT_FONT = Platform.OS === "ios" ? "Georgia" : "Roboto";

const styles = StyleSheet.create({
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
  text: {
    padding: 5,
    fontSize: 14,
    fontFamily: TEXT_FONT,
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
  scroll: {
    marginBottom: 15,
  },
});
