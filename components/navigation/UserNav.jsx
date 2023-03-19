import React, { Fragment } from "react";
import { Platform, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { HeaderStyleInterpolators } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo, Foundation } from "@expo/vector-icons";

import HomeScreenStack from "./HomeScreenStack";
import RecipesScreenStack from "./RecipesScreenStack";
import MealPlanScreenStack from "./MealPlanScreenStack";
import GroceriesScreenStack from "./GroceriesScreenStack";

import { SafeAreaView } from "react-native-safe-area-context";

const Tab = createBottomTabNavigator();

const THEME_COLOR = "#295fa6";
const HEADER_FONT = Platform.OS === "ios" ? "Helvetica Neue" : "Roboto";

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
    backgroundColor: THEME_COLOR,
  },

  headerTintColor: "#F5F5F5",
  headerTitleStyle: {
    fontWeight: "bold",
    fontFamily: HEADER_FONT,
    fontSize: 30,
  },

  tabBarActiveTintColor: "#F5F5F5",
  tabBarInactiveTintColor: "#111111",
  tabBarStyle: {
    top: -5,
    paddingTop: 15,
    marginTop: -20,
    borderTopWidth: -1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#295fa6",
  },
  headerShown: false,
  tabBarShadowVisible: false,
  tabBarHideOnKeyboard: true,
  ...MyTransition,
};

export default function UserNav({ userId }) {
  return (
    <Fragment>
      <SafeAreaView style={styles.topSafeArea} />
      <SafeAreaView style={styles.bottomSafeArea}>
        <NavigationContainer>
          <Tab.Navigator screenOptions={options}>
            <Tab.Screen
              name="HomeScreenStack"
              component={HomeScreenStack}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Entypo name="home" size={size} color={color} />
                ),
                title: "Home",
              }}
            />
            <Tab.Screen
              name="RecipesScreenStack"
              component={RecipesScreenStack}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Foundation name="book-bookmark" size={size} color={color} />
                ),
                title: "Recipe Book",
              }}
            />
            <Tab.Screen
              name="MealPlanScreenStack"
              component={MealPlanScreenStack}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Entypo name="calendar" size={size} color={color} />
                ),
                title: "Meal Planning",
              }}
            />
            <Tab.Screen
              name="GroceriesScreenStack"
              component={GroceriesScreenStack}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <Entypo name="shopping-basket" size={size} color={color} />
                ),
                title: "Groceries List",
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  topSafeArea: {
    flex: 0,
    backgroundColor: THEME_COLOR,
  },
  bottomSafeArea: {
    flex: 1,
    backgroundColor: THEME_COLOR,
  },
});
