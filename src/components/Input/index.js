import { SafeAreaView, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

const Input = (props) => {
  return (
    <SafeAreaView>
      <Text style={style.label}>{props.label}</Text>
      <TextInput
        style={style.input}
        placeholder={props.placeholder}
        secureTextEntry={props.mask}
        keyboardType={props.type}
        onChangeText={(e) => props.setValor(e)}
      ></TextInput>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  input: {
    borderWidth: 2,
    marginBottom: 15,
    borderColor: "#ff440b",
    marginTop: 3,
    padding: 10,
    width: 250,
    fontSize: 18,
    borderRadius: 10,
    backgroundColor: "whitesmoke",
  },
  label: {
    fontSize: 18,
    color: "#fff",
  },
});

export default Input;
