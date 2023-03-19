import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  HeaderStyleInterpolators,
} from "@react-navigation/stack";

import HomeScreen from "../screens/Home";
import RecipeScreen from "../screens/Recipe";
// import MealPlanScreen from "../screens/MealPlan";
// import SettingsScreen from "../screens/Settings";

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
  ...MyTransition,
};

export default function UserStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={options} />
        <Stack.Screen
          name="Recipe"
          component={RecipeScreen}
          options={options}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
