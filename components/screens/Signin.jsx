import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import { Input, Button } from "react-native-elements";
import { FontAwesome } from "@expo/vector-icons";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

export default function SigninScreen({ navigation }) {
  const [value, setValue] = React.useState({
    email: "",
    password: "",
    error: "",
  });

  async function signIn() {
    if (value.email === "" || value.password === "") {
      setValue({
        ...value,
        error: "Email and password are mandatory.",
      });
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, value.email, value.password);
      console.log("Signing in user");
    } catch (error) {
      setValue({
        ...value,
        error: error.message,
      });
    }
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        {!!value.error && (
          <View style={styles.error}>
            <Text>{value.error}</Text>
          </View>
        )}
        <View style={styles.controls}>
          <Input
            placeholder="Email"
            containerStyle={styles.control}
            value={value.email}
            onChangeText={(text) => setValue({ ...value, email: text })}
            leftIcon={<FontAwesome name="envelope" size={16} />}
          />

          <Input
            placeholder="Password"
            containerStyle={styles.control}
            value={value.password}
            onChangeText={(text) => setValue({ ...value, password: text })}
            secureTextEntry={true}
            leftIcon={<FontAwesome name="key" size={16} />}
          />
          <View style={styles.buttons}>
            <Button title="Sign in" style={styles.button} onPress={signIn} />
            <Button
              title="Sign up"
              onPress={() => navigation.navigate("Sign Up")}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const TEXT_FONT = Platform.OS === "ios" ? "Georgia" : "Roboto";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },

  controls: {
    flex: 1,
  },

  control: {
    marginTop: 10,
  },

  error: {
    marginTop: 10,
    padding: 10,
    color: "#fff",
    backgroundColor: "#D54826FF",
  },

  buttons: {},

  button: {
    marginTop: 20,
  },
});
