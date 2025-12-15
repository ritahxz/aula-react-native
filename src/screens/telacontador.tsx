import { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function TelaContador() {
  const [contador, setContador] = useState(7);

  function incrementar() {
    setContador(contador + 1);
  }

  function decrementar() {
    setContador(contador - 1);
  }

  useEffect(() => {
    console.log('Valor do contador:', contador);
  }, [contador]);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Inputs</Text>

      <View style={styles.botao}>
        <Button title="+" onPress={incrementar} />
      </View>

      <View style={styles.botao}>
        <Button title="-" onPress={decrementar} />
      </View>

      <Text style={styles.valor}>{contador}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  titulo: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 15,
  },

  botao: {
    marginBottom: 20,
  },

  valor: {
    fontSize: 32,
    textAlign: 'center',
  },
});
