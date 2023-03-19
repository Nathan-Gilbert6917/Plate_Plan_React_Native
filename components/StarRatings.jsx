import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Rating = ({ value }) => {
  const fullStars = Math.floor(value);
  const halfStars = Math.round(value - fullStars);
  const emptyStars = 5 - fullStars - halfStars;

  const renderStars = (type, count) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(<Icon key={i} name={type} style={styles.star} />);
    }
    return stars;
  };

  return (
    <View style={styles.container}>
      {renderStars("star", fullStars)}
      {renderStars("star-half-o", halfStars)}
      {renderStars("star-o", emptyStars)}
      <Text style={styles.rating}>{value.toFixed(1)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  star: {
    fontSize: 24,
    color: "#f1c40f",
    marginRight: 4,
  },
  rating: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8,
  },
});

export default Rating;
