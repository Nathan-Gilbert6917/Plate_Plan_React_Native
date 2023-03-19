import React from "react";

import { StatusBar } from "expo-status-bar";

import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ScrollView style={styles.container}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Welcome to Plate Plan!</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Sign Up"
            type="outline"
            buttonStyle={styles.button}
            onPress={() => navigation.navigate("Sign Up")}
          />
          <Button
            title="Sign In"
            buttonStyle={styles.button}
            onPress={() => navigation.navigate("Sign In")}
          />
        </View>
      </ScrollView>
      <View style={styles.buttons}></View>
    </View>
  );
}
const TEXT_FONT = Platform.OS === "ios" ? "Georgia" : "Roboto";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 50,
    marginBottom: 50,
  },
  welcomeImage: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 50,
  },
});

//  const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     justifyContent: "center",
//   },
//   buttons: {
//     flex: 1,
//     flexDirection: "row",
//     justifyContent: "space-around",
//   },

//   button: {
//     marginTop: 10,
//     paddingHorizontal: 30,
//   },
// });
