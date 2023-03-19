import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import { StatusBar } from "expo-status-bar";
import { Button } from "react-native-elements";
import NavBarFooter from "../NavBarFooter";

export default function SettingsScreen({ navigation }) {
  const handleChangeEmail = () => {
    console.log("handleChangeEmail");
  };

  const handleChangePassword = () => {
    console.log("handleChangePassword");
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      {/* Header */}
      <View style={[styles.headerSection, styles.shadowProp]}></View>
      <ScrollView stickyHeaderIndices={[0]}>
        <View style={[styles.yearSelector, styles.shadowProp]}>
          <Button
            title="Sign Out"
            style={styles.button}
            onPress={() => console.log("Log Out")}
          />
          <Button title="Change Email" onPress={() => handleChangeEmail()} />
          <Button
            title="Change Password"
            onPress={() => handleChangePassword()}
          />
        </View>
      </ScrollView>
      {/* Nav Bar Footer */}
      <NavBarFooter navigation={navigation} />
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
    top: -20,
    paddingTop: 0,
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#295fa6",
    paddingVertical: 39,
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
