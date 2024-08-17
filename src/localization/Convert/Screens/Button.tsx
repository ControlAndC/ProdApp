import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

interface ButtonProps {
  click: () => void;
}
const Button = ({ click, children }) => {
  return (
    <TouchableOpacity onPress={click} style={styles.button}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: "black",
    backgroundColor: "black",
    padding: 20,
    borderRadius: 8,
    width: "100",
  },
});
