import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const SuperButton = (props) => {
  return (
    <TouchableOpacity style={styles.myBtn} onPress={props.fn}>
      <Text style={styles.text}>{props.textButton}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  myBtn: {
    backgroundColor: "#ff440b",
    padding: 20,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 10,
    width: 200,
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "200",
    color: "white",
  },
});

export default SuperButton;
