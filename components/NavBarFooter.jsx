import React from "react";
import { AntDesign, Octicons, Ionicons } from "@expo/vector-icons";
import { View, Pressable, StyleSheet, Text } from "react-native";

const NavBarFooter = ({ navigation }) => {
  return (
    <View style={[styles.footer, styles.shadowProp]}>
      <Pressable
        style={styles.footerButton}
        onPress={() => navigation.navigate("Home")}
      >
        <AntDesign name="barschart" style={styles.footerIcon} />
        <Text style={styles.footerLink}>Home</Text>
      </Pressable>

      <Pressable
        style={styles.footerButton}
        onPress={() => navigation.navigate("Recipes")}
      >
        <Octicons name="three-bars" style={styles.footerIcon} />
        <Text style={styles.footerLink}>Recipes</Text>
      </Pressable>

      <Pressable
        style={styles.footerButton}
        onPress={() => navigation.navigate("Meal Plan")}
      >
        <Ionicons name="settings-sharp" style={styles.footerIcon} />
        <Text style={styles.footerLink}>Meal Plan</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default NavBarFooter;
