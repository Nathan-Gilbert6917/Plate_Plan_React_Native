import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, Button } from "react-native";

import { StatusBar } from "expo-status-bar";
import Checkbox from "expo-checkbox";
import { Input } from "react-native-elements";
import QuantitySelector from "../QuantitySelector";

export default function GroceryScreen({ route }) {
  useEffect(() => {
    if (route.params?.ingredients)
      // route.params.ingredients.forEach(async (element) => {
      //   await addNewItem(element);
      // });
      addNewItems(route.params?.ingredients);
  }, [route.params]);

  const [items, setItems] = useState([
    { name: "apple", quantity: 5 },
    { name: "bananafffffffffffffffffffffffffffffffff", quantity: 2 },
    {
      name:
        "orange fhujshfjshdjfsdhj fsf sdgf sdgf hsdfhsdfhs gfsdfgsdfgsdhfg sh gfh dgfhsdgf hg f",
      quantity: 8,
    },
    { name: "orange pie", quantity: 8 },
    { name: "orange fdshfusdghfh", quantity: 8 },
    { name: "orangesfsdfsjdfbsdfbshf sdf sdfjsdfsd fd f", quantity: 8 },
  ]);

  const [checkedItems, setCheckedItems] = useState(
    new Array(items.length).fill(false)
  );

  const [newItem, setNewItem] = useState("");

  const addNewItem = (value) => {
    // Value is not populated
    if (value === undefined || value === null || value === "") {
      return;
    }
    // Checking to see if the Item already is in the list
    const results = items.filter(({ name }) => {
      if (name === value) {
        return name;
      }
    });

    if (results.length === 0) {
      // Item doesn't exist
      setItems([...items, { name: value, quantity: 1 }]);
    } else {
      // Item does exist
      handleUpdateQuantity(value, results[0].quantity + 1);
    }
    // Clear out the intput
    setNewItem("");
  };

  const addNewItems = (newItems) => {
    const newArray = [];
    let updatedList = items;
    newItems.forEach((element) => {
      // Checking to see if the Item already is in the list

      const results = items.filter((item) => {
        if (item.name === element) {
          return item.name;
        }
      });
      if (results.length === 0) {
        // Item doesn't exist
        newArray.push({ name: element, quantity: 1 });
      } else {
        // Item does exist
        updatedList = updatedList.map((obj) => {
          if (obj.name === element) {
            return { ...obj, quantity: obj.quantity + 1 };
          }
          return obj;
        });
      }
    });
    setItems([...updatedList, ...newArray]);
  };

  const handleCheck = (index) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !checkedItems[index];
    setCheckedItems(newCheckedItems);
  };

  const handleUpdateQuantity = (itemName, newQuantity) => {
    const updatedItems = items.map((item) => {
      if (item.name === itemName) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const handleRemoveItem = (itemName) => {
    setItems(items.filter(({ name }) => name !== itemName));
  };

  // useEffect(() => {
  //   if (
  //     route.params &&
  //     route.params.ingredients &&
  //     route.params.ingredients.length > 0
  //   ) {
  //     addNewItems(route.params.ingredients);
  //   }
  // }, [route.params.ingredients]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View style={[styles.headerSection, styles.shadowProp]}></View>

      <ScrollView>
        <View style={styles.section}>
          {/* Clear List */}
          <View style={styles.clearButton}>
            <Button title="Clear List" onPress={() => setItems([])} />
          </View>
        </View>
        <View style={styles.section}>
          {/* Grocery Items */}
          <View style={styles.groceryListContainer}>
            <View style={styles.groceryList}>
              {items.length > 0 ? (
                items.map(({ name, quantity }) => (
                  <View key={name} style={styles.groceryItem}>
                    <Checkbox
                      style={styles.checkbox}
                      value={checkedItems[name]}
                      onValueChange={() => handleCheck(name)}
                      color={checkedItems[name] ? "#295fa6" : undefined}
                    />
                    <View style={styles.groceryListItemContainer}>
                      <Text style={styles.groceryListItem}>{name}</Text>
                    </View>
                    <QuantitySelector
                      quantity={quantity}
                      onIncrement={() =>
                        handleUpdateQuantity(name, quantity + 1)
                      }
                      onDecrement={() =>
                        handleUpdateQuantity(name, quantity - 1)
                      }
                      onRemove={() => handleRemoveItem(name)}
                    ></QuantitySelector>
                  </View>
                ))
              ) : (
                <Text style={styles.text}>No Items in Grocery List</Text>
              )}
            </View>
          </View>
        </View>
        <View style={styles.section}>
          {/* Add Grocery Item */}
          <Input
            value={newItem}
            placeholder="Add Grocery Item Name"
            onChangeText={(value) => setNewItem(value)}
          ></Input>
          <View style={styles.addButton}>
            <Button title="Add Item" onPress={() => addNewItem(newItem)} />
          </View>
        </View>
        <View style={[styles.section, styles.bottom]}>
          {/* Save List 
          <View style={styles.saveButton}>
            <Button title="Save List" />
          </View>*/}
        </View>

        {/* Grocery Lists 
        <Text>Grocery Lists</Text>
        <CheckmarkList
          style={[styles.list, styles.text]}
          items={groceryLists}
        />
        */}
      </ScrollView>
    </View>
  );
}

const TEXT_FONT = Platform.OS === "ios" ? "Georgia" : "Roboto";
const styles = StyleSheet.create({
  text: {
    padding: 5,
    fontSize: 14,
    fontFamily: TEXT_FONT,
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
  groceryItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
  },
  groceryList: {
    alignItems: "stretch",
    maxWidth: "100%",
    flexDirection: "column",
    gap: 25,
  },
  groceryListContainer: {
    marginHorizontal: 5,
    maxWidth: "100%",
  },
  groceryListItem: {
    marginRight: "auto",
    maxWidth: "100%",
  },
  groceryListItemContainer: {
    width: "50%",
  },
  bottom: {
    marginBottom: 30,
  },
});
