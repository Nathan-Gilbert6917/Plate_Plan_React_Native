import React, { useState } from "react";
import { View, Button, Image, StyleSheet, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import firestore from "@react-native-firebase/firestore";

const ImageUpload = ({ setRecipeImageURL }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  // ask for permission to access the device's image library
  const getPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission Denied",
        "Sorry, we need camera roll permissions to make this work!",
        [{ text: "OK" }]
      );
    }
  };

  // handle the user selecting an image from their library
  const pickImage = async () => {
    await getPermission();
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      setSelectedImage(result.uri);
      uploadImage(result.uri);
    }
  };

  // upload the selected image to Firebase Storage and get the URL
  const uploadImage = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    const filename = uri.split("/").pop();
    const ref = firestore().storage().ref().child(`images/${filename}`);
    const snapshot = await ref.put(blob);
    const url = await snapshot.ref.getDownloadURL();
    setRecipeImageURL(url);
  };

  return (
    <View style={styles.imageUpload}>
      {selectedImage && (
        <Image source={{ uri: selectedImage }} style={styles.image} />
      )}
      <Button title="Choose Image" onPress={pickImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  imageUpload: {
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
});

export default ImageUpload;
