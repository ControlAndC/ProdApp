import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

interface ItemsProps {
  click: () => void;
  item: any;
}

const Items =React.memo( ({ click, item }: ItemsProps) => {
  console.log("render called");
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => click(item.title+'')}
    >
      <Text>{item.title+''}</Text>
    </TouchableOpacity>
  );
})
export default Items;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "black",
    padding: 10,
    borderWidth: 1,
  },
});
