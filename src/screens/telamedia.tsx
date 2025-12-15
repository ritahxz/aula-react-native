import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function TelaMedia() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [media, setMedia] = useState<number | null>(null);

  function calcularMedia() {
    const valor1 = Number(num1);
    const valor2 = Number(num2);

    if (!isNaN(valor1) && !isNaN(valor2)) {
      setMedia((valor1 + valor2) / 2);
    } else {
      setMedia(null);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calcular Média</Text>

      <TextInput
        style={styles.input}
        placeholder="media 1"
        keyboardType="numeric"
        value={num1}
        onChangeText={setNum1}
      />

      <TextInput
        style={styles.input}
        placeholder="media 2"
        keyboardType="numeric"
        value={num2}
        onChangeText={setNum2}
      />

      <Button title="Média" onPress={calcularMedia} />

      {media !== null && (
        <Text style={styles.resultado}>Valor da média: {media}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#000', borderRadius: 5, marginBottom: 15, padding: 10 },
  resultado: { marginTop: 20, fontSize: 20, fontWeight: 'bold', textAlign: 'center' },
});
