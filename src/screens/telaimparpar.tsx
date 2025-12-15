import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function TelaParImpar() {
  const [numero, setNumero] = useState('');
  const [resultado, setResultado] = useState<string | null>(null);

  function verificar() {
    const valor = Number(numero);

    if (isNaN(valor)) {
      setResultado(null);
      return;
    }

    if (valor % 2 === 0) {
      setResultado('O número é par');
    } else {
      setResultado('O número é ímpar');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Par ou Ímpar</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        placeholder="Digite um número"
        value={numero}
        onChangeText={setNumero}
      />

      <Button title="Verificar" onPress={verificar} />

      {resultado !== null && (
        <Text style={styles.resultado}>{resultado}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  input: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },

  resultado: {
    marginTop: 20,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
