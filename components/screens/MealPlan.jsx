import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import { StatusBar } from "expo-status-bar";
import WeeklyCalendar from "react-native-weekly-calendar";
import RecipeCard from "../RecipeCard";
import { Button } from "react-native-elements";

// const sampleEvents = [
//   { start: "2023-03-23", duration: "", note: "Walk my dog" },
//   {
//     start: "2023-03-24",
//     duration: "",
//     note: "Doctor's appointment",
//   },
//   {
//     start: "2023-03-25",
//     duration: "",
//     note: "Morning exercise",
//   },
//   {
//     start: "2023-03-25",
//     duration: "",
//     note: "Meeting with client",
//   },
//   {
//     start: "2023-03-25",
//     duration: "",
//     note: "Dinner with family",
//   },
// ];

const mealPlanEvents = [
  {
    id: "1",
    start: "2023-03-19",
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
    start: "2023-03-21",
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
    start: "2023-03-21",
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
    start: "2023-03-20",
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
    start: "2023-03-19",
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
    start: "2023-03-23",
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
    start: "2023-03-25",
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

export default function MealPlanScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      {/* Header */}
      <View style={[styles.headerSection, styles.shadowProp]}></View>

      <ScrollView
        ref={(scroller) => {
          this.scroller = scroller;
        }}
      >
        <View style={styles.calander}>
          <WeeklyCalendar
            events={mealPlanEvents}
            themeColor="#000"
            style={{
              height: "auto",
              color: "#000",
              borderBottomWidth: 0.5,
              borderTopWidth: 0,
              borderBottomColor: "#00000050",
            }}
            renderEvent={(event, j) => {
              return (
                <View key={j}>
                  <RecipeCard recipe={event} navigation={navigation} />
                </View>
              );
            }}
            renderDay={(eventViews, weekdayToAdd, i) => (
              <View
                key={i.toString()}
                style={i === 6 ? styles.lastDay : styles.day}
              >
                <View style={styles.dayLabel}>
                  <Text style={[styles.monthDateText, { color: "#F5F5F5" }]}>
                    {weekdayToAdd.format("M/D").toString()}
                  </Text>
                  <Text style={[styles.dayText, { color: "#F5F5F5" }]}>
                    {weekdayToAdd.format("ddd").toString()}
                  </Text>
                </View>
                <View
                  style={[
                    styles.allEvents,
                    eventViews.length === 0 ? { width: "100%" } : {},
                  ]}
                >
                  <ScrollView horizontal style={styles.dayScroll}>
                    {eventViews}
                  </ScrollView>
                </View>
              </View>
            )}
            onDayPress={(weekday, i) => {
              this.scroller.scrollTo({ y: i * 335, animated: true });
            }}
          />
          <View style={styles.topButtonContainer}>
            <Button
              title="Back To Top"
              onPress={() => this.scroller.scrollTo({ y: 0, animated: true })}
            />
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
  calander: {
    verticalAlign: "middle",
    marginVertical: 20,
    marginBottom: 30,
  },
  day: {
    flexDirection: "row",
    borderBottomColor: "#00000025",
    borderBottomWidth: 2,

    paddingVertical: 5,
  },
  dayLabel: {
    zIndex: 10,
    width: "15%",
    minHeight: 325,
    maxHeight: 350,
    minWidth: 40,
    marginRight: -10,
    gap: 10,
    backgroundColor: "#295fa6",
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  allEvents: {
    width: "85%",
    marginLeft: 10,
  },
  lastDay: {
    flexDirection: "row",
    paddingBottom: 5,
    paddingVertical: 5,
  },

  topButtonContainer: {
    padding: 20,
    paddingHorizontal: 40,
  },
});
