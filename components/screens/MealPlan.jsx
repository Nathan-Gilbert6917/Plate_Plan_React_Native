import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import { StatusBar } from "expo-status-bar";

export default function OverviewScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      {/* Header */}
      <View style={[styles.headerSection, styles.shadowProp]}></View>
      <ScrollView>
        <View style={styles.section}>
          <Text>MealPlan</Text>
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
