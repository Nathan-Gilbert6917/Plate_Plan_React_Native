import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function CollapseSection({ title, items, subTitle, collapsed }) {
  const [isCollapsed, setCollapsed] = useState(collapsed);

  if (!Array.isArray(items)) {
    items = [];
  }

  return (
    <View>
      <TouchableWithoutFeedback onPress={() => setCollapsed(!isCollapsed)}>
        <View style={styles.titleWrapper}>
          <View>
            <Text style={styles.title}>{title}</Text>
            {subTitle && <Text style={styles.subtitle}>{subTitle}</Text>}
          </View>

          {isCollapsed ? (
            <AntDesign style={styles.iconButton} name="downcircleo" />
          ) : (
            <AntDesign style={styles.iconButton} name="upcircleo" />
          )}
        </View>
      </TouchableWithoutFeedback>
      {!isCollapsed &&
        items.map((item) => {
          return item;
        })}
    </View>
  );
}

const styles = StyleSheet.create({
  titleWrapper: {
    borderBottomColor: "#595959",
    borderBottomWidth: 2,
    marginBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  iconButton: {
    color: "#595959",
    fontSize: 24,
    paddingRight: 5,
    paddingBottom: 4,
  },
  title: {
    fontSize: 24,
    color: "#595959",
    paddingLeft: 5,
    paddingBottom: 4,
  },
  subtitle: {
    fontSize: 18,
    color: "#595959",
    paddingLeft: 5,
    paddingBottom: 4,
  },
});
