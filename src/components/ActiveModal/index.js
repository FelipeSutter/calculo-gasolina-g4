import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import SuperButton from "../MeuButton";

const ActiveModal = (props) => {
  return (
    <View style={styles.container}>
      {props.img && (
        <Image source={props.img} style={{ width: 200, height: 200 }} />
      )}
      <Text style={styles.textLabel}>{props.label}</Text>
      <Text style={styles.text}>Gasolina R$ {props.gasolina}</Text>
      <Text style={styles.text}>Álcool R$ {props.alcool}</Text>
      <Text style={styles.text}>Resultado: {props.resultado}</Text>
      <SuperButton textButton="Calcular novamente" fn={props.handleClose} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#270b53",
  },
  text: {
    fontSize: 22,
    margin: 8,
    fontWeight: "bold",
    color: "#fff",
  },
  textLabel: {
    color: "#ff440b",
    fontSize: 28,
  },
});

export default ActiveModal;
