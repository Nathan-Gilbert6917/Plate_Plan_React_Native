import React from "react";

import {
  createStackNavigator,
  HeaderStyleInterpolators,
} from "@react-navigation/stack";

// import HomeScreen from "../screens/Home";
import RecipeScreen from "../screens/Recipe";
// import RecipesScreen from "../screens/Recipes";
// import MealPlanScreen from "../screens/MealPlan";
import GroceriesScreen from "../screens/Groceries";

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

export default function GroceriesScreenStack() {
  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen
        name="GroceriesScreen"
        component={GroceriesScreen}
        options={{
          title: "Grocery List",
        }}
      />
      <Stack.Screen
        name="RecipeScreen"
        component={RecipeScreen}
        options={{
          title: "Recipe Book",
        }}
      />
    </Stack.Navigator>
  );
}
