import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function TelaSoma() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [num3, setNum3] = useState('');
    const [resultado, setResultado] = useState<number | null>(null);
    
     function calcular() {
        const soma =
        Number(num1) +
        Number(num2) +
        Number(num3);
        
        setResultado(soma);
     }

     return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Somar 3 numeros</Text>

            <TextInput
             style={styles.input}
             keyboardType="numeric"
             placeholder="Valor 1"
             value={num1}
             onChangeText={setNum1}
            />

            <TextInput
             style={styles.input}
             keyboardType="numeric"
             placeholder="Valor 2"
             value={num2}
             onChangeText={setNum2}
            />

           <TextInput
             style={styles.input}
             keyboardType="numeric"
             placeholder="Valor 3"
             value={num3}
             onChangeText={setNum3}
            />

            <Button title="Calcular" onPress={calcular} />

            
      {resultado !== null && (
        <Text style={styles.resultado}>Resultado: {resultado}</Text>
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
    textAlign: 'center'
  },

  input: {
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5
  },

  resultado: {
    marginTop: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center'
  }
}); 