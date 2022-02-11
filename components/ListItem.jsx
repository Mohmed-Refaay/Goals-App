import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

const Listitem = ({ value, deleteHandler }) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={deleteHandler}>
      <View style={styles.listItem}>
        <Text>{value}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Listitem;

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});
