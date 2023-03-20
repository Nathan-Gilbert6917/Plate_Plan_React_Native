import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  Image,
} from "react-native";

import { StatusBar } from "expo-status-bar";

import firestore from "@react-native-firebase/firestore";
import { Input } from "react-native-elements";
import ImageUpload from "../ImageUpload";
import RemovableItemList from "../RemovableItemList";
import RecipeCard from "../RecipeCard";

const PLACEHOLDER = "../../assets/recipe_placeholder.jpg";

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
  const [ingredientInput, setIngredientInput] = useState("");
  const [equipmentInput, setEquipmentInput] = useState("");
  const [instructionsInput, setInstructionsInput] = useState("");

  const updateRecipeField = (fieldName, newValue) => {
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      [fieldName]: newValue,
    }));
  };

  const handleAddIngredient = () => {
    setRecipe((prevFormData) => ({
      ...prevFormData,
      ingredients: [...prevFormData.ingredients, ingredientInput],
    }));
    setIngredientInput("");
  };

  const handleAddEquipment = () => {
    setRecipe((prevFormData) => ({
      ...prevFormData,
      equipment: [...prevFormData.equipment, equipmentInput],
    }));
    setEquipmentInput("");
  };

  const handleAddInstruction = () => {
    setRecipe((prevFormData) => ({
      ...prevFormData,
      instructions: [...prevFormData.instructions, instructionsInput],
    }));
    setInstructionsInput("");
  };

  const handleRemoveItemFromList = (fieldName, index) => {
    setRecipe((prevState) => {
      const newItems = [...prevState[fieldName]];
      newItems.splice(index, 1);
      return { ...prevState, [fieldName]: newItems };
    });
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
        <View style={[styles.section, styles.topSection]}>
          <Text style={styles.text}>Upload Image</Text>
          <View style={styles.imageContainer}>
            {recipe.image_url ? (
              <Image style={styles.image} source={{ uri: recipe.image_url }} />
            ) : (
              <Image style={styles.image} source={require(PLACEHOLDER)} />
            )}
          </View>

          <ImageUpload
            setRecipeImageURL={(value) => updateRecipeField("image_url", value)}
          />
        </View>

        {/* Name */}
        <View style={styles.section}>
          <Text style={styles.text}>Name</Text>
          <Input
            value={recipe.name}
            placeholder="Add Grocery Item Name"
            onChangeText={(value) => updateRecipeField("name", value)}
          />
        </View>

        {/* Servings */}
        <View style={styles.section}>
          <Text style={styles.text}>Servings</Text>
          <Input
            value={recipe.servings}
            placeholder="Add Grocery Item Name"
            onChangeText={(value) => updateRecipeField("servings", value)}
          />
        </View>

        {/* Total Time */}
        <View style={styles.section}>
          <Text style={styles.text}>Total Time</Text>
          <Input
            value={recipe.total_time}
            placeholder="Add Grocery Item Name"
            onChangeText={(value) => updateRecipeField("total_time", value)}
          />
        </View>

        {/* Description */}
        <View style={styles.section}>
          <Text style={styles.text}>Description</Text>
          <Input
            value={recipe.description}
            placeholder="Add Grocery Item Name"
            onChangeText={(value) => updateRecipeField("description", value)}
          />
        </View>

        {/* Ingredients */}
        <View style={styles.section}>
          <Text style={styles.text}>Ingredients</Text>
          <RemovableItemList
            items={recipe.ingredients}
            onRemoveItem={(index) =>
              handleRemoveItemFromList("ingredients", index)
            }
          />
          <Input
            value={ingredientInput}
            placeholder="Add Grocery Item Name"
            onChangeText={(value) => setIngredientInput(value)}
          />
          <Button title="Add Ingredient" onPress={handleAddIngredient} />
        </View>

        {/* Equipment */}
        <View style={styles.section}>
          <Text style={styles.text}>Equipment</Text>
          <RemovableItemList
            items={recipe.equipment}
            onRemoveItem={(index) =>
              handleRemoveItemFromList("equipment", index)
            }
          />
          <Input
            value={equipmentInput}
            placeholder="Add Grocery Item Name"
            onChangeText={(value) => setEquipmentInput(value)}
          />
          <Button title="Add Equipment" onPress={handleAddEquipment} />
        </View>

        {/* Instructions */}
        <View style={styles.section}>
          <Text style={styles.text}>Instructions</Text>
          <RemovableItemList
            items={recipe.instructions}
            onRemoveItem={(index) =>
              handleRemoveItemFromList("instructions", index)
            }
          />
          <Input
            value={instructionsInput}
            placeholder="Add Grocery Item Name"
            onChangeText={(value) => setInstructionsInput(value)}
          />
          <Button title="Add Instruction" onPress={handleAddInstruction} />
        </View>

        {/* Recipe Preview */}
        <View style={[styles.preview, styles.section]}>
          <Text style={styles.heading}>Preview Recipe</Text>
          <RecipeCard recipe={recipe} navigation={navigation} />
        </View>

        <View style={styles.bottomSection}>
          {/* Submit Button */}
          <View style={styles.section}>
            <View style={styles.createRecipe}>
              <Button
                title="Submit Recipe"
                onPress={() => navigation.navigate("RecipeScreen")}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const TEXT_FONT = Platform.OS === "ios" ? "Georgia" : "Roboto";
const styles = StyleSheet.create({
  text: {
    padding: 5,
    fontSize: 16,
    fontFamily: TEXT_FONT,
    fontWeight: "bold",
  },
  heading: {
    fontSize: 20,
    fontFamily: TEXT_FONT,
    fontWeight: "bold",
  },
  image: {
    height: 175,
    resizeMode: "cover",
    width: "80%",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  preview: {
    justifyContent: "center",
    alignItems: "center",
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
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  topSection: {
    paddingTop: 50,
  },
  bottomSection: {
    paddingVertical: 30,
    paddingBottom: 50,
  },
});
