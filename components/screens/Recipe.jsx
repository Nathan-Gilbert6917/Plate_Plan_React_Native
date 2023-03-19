import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  Button,
} from "react-native";
import CheckmarkList from "../CheckmarkList";

import StarRating from "../StarRatings";
import FavoriteButton from "../FavoriteButton";

const PLACEHOLDER = "../../assets/recipe_placeholder.jpg";

const RecipeScreen = ({ route, navigation }) => {
  const {
    image_url,
    name,
    rating,
    description,
    ingredients,
    equipment,
    instructions,
    author,
    servings,
    total_time,
    favorited,
  } = route.params;

  const [isFavorite, setIsFavorite] = useState(favorited);

  const handleFavorite = (e) => {
    setIsFavorite(e);
  };

  const addIngredientsToGroceryList = () => {
    navigation.navigate("GroceriesScreenStack", {
      screen: "GroceriesScreen",
      params: {
        ingredients: ingredients,
      },
    });
  };

  return (
    <View style={styles.container}>
      <View style={[styles.headerSection, styles.shadowProp]}></View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {image_url ? (
          <Image style={styles.image} source={{ uri: image_url }} />
        ) : (
          <Image style={styles.image} source={require(PLACEHOLDER)} />
        )}
        {/* Favorite */}
        <View style={styles.favoriteButton}>
          <FavoriteButton
            isFavorite={isFavorite}
            onPress={(e) => handleFavorite(e)}
          />
        </View>
        <View style={styles.infoContainer}>
          {/* Recipe Title */}
          <Text style={styles.name}>{name}</Text>
          {/* Author */}
          <View style={styles.center}>
            <Text style={styles.author}>By {author}</Text>
          </View>
          {/* Rating */}
          <View style={styles.rating}>
            <StarRating value={rating} />
          </View>
          {/* Servings & Total Time */}
          <View style={styles.subtext}>
            <Text style={[styles.servings, styles.text]}>
              Servings: {servings}
            </Text>
            <Text style={[styles.time, styles.text]}>
              Total Time: {total_time} mins
            </Text>
          </View>

          {/* Description */}
          <Text style={[styles.description, styles.text]}>{description}</Text>

          {/* Ingredients */}

          <Text style={styles.heading}>Ingredients:</Text>
          <CheckmarkList
            style={[styles.list, styles.text]}
            items={ingredients}
          />
          <Button
            title="Add Ingredients To Grocery List"
            onPress={() => addIngredientsToGroceryList()}
          />

          {/* Equipment */}
          <Text style={styles.heading}>Equipment:</Text>
          <CheckmarkList style={[styles.list, styles.text]} items={equipment} />

          {/* Instructions */}
          <Text style={styles.heading}>Instructions:</Text>
          <CheckmarkList
            style={[styles.list, styles.text]}
            items={instructions}
          />

          {/* Rating Recipe 
          <Text style={styles.heading}>Rating System WIP</Text>*/}
        </View>
      </ScrollView>
    </View>
  );
};

const HEADER_FONT = Platform.OS === "ios" ? "Helvetica Neue" : "Roboto";
const TEXT_FONT = Platform.OS === "ios" ? "Georgia" : "Roboto";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    marginLeft: -20,
    marginRight: -20,
  },
  text: {
    padding: 5,
    fontSize: 14,
    fontFamily: TEXT_FONT,
  },
  headerSection: {
    top: -10,
    zIndex: 10,
    left: 0,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: -25,
    backgroundColor: "#295fa6",
    paddingVertical: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  star: {
    fontSize: 24,
    color: "#f1c40f",
    marginRight: 4,
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
  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    paddingBottom: 20,
  },
  image: {
    width: "80%",
    height: 200,
    borderRadius: 15,
  },
  infoContainer: {
    width: "80%",
    marginTop: 20,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    fontFamily: HEADER_FONT,
  },
  list: {
    fontSize: 16,
    marginBottom: 10,
  },
  instructions: {
    fontSize: 16,
    marginBottom: 20,
  },
  author: {
    fontSize: 16,
    fontStyle: "italic",
    textAlign: "right",
  },
  center: {
    alignItems: "center",
  },
  rating: {
    alignItems: "center",
    padding: 10,
  },
  subtext: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-evenly",
  },
  favoriteButton: {
    top: 155,
    right: 50,
    position: "absolute",
  },
});

export default RecipeScreen;
