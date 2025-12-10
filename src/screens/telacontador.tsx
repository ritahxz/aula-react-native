import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function TelaContador() {
  const [valor, setValor] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contador</Text>

      <Text style={styles.valor}>{valor}</Text>

      <View style={styles.botoes}>
        <TouchableOpacity style={styles.botao} onPress={() => setValor(valor + 1)}>
          <Text style={styles.textoBotao}>+</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.botao} onPress={() => setValor(valor - 1)}>
          <Text style={styles.textoBotao}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
  valor: {
    fontSize: 60,
    fontWeight: "bold",
    marginBottom: 40,
  },
  botoes: {
    flexDirection: "row",
    gap: 20,
  },
  botao: {
    backgroundColor: "#e0e0e0",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 12,
  },
  textoBotao: {
    fontSize: 32,
    fontWeight: "bold",
  },
});
