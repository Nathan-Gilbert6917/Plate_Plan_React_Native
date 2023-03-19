import React from "react";

import {
  createStackNavigator,
  HeaderStyleInterpolators,
} from "@react-navigation/stack";

import RecipeScreen from "../screens/Recipe";
import RecipesScreen from "../screens/Recipes";
import NewRecipeScreen from "../screens/NewRecipe";

const Stack = createStackNavigator();

const MyTransition = {
  gestureDirection: "vertical",
  animationEnabled: false,
  transitionConfig: () => ({
    transitionSpec: {
      duration: 0,
      timing: 0,
    },
  }),
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
};

const options = {
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: "#295fa6",
  },

  headerTintColor: "#F5F5F5",
  headerTitleStyle: {
    fontWeight: "bold",
    fontSize: 24,
  },
  headerShown: true,
  tabBarHideOnKeyboard: true,
  ...MyTransition,
};

export default function RecipesScreenStack() {
  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen
        name="RecipesScreen"
        component={RecipesScreen}
        options={{
          title: "Recipes",
        }}
      />
      <Stack.Screen
        name="RecipeScreen"
        component={RecipeScreen}
        options={{
          title: "Recipe",
        }}
      />
      <Stack.Screen
        name="NewRecipeScreen"
        component={NewRecipeScreen}
        options={{
          title: "New Recipe",
        }}
      />
    </Stack.Navigator>
  );
}
