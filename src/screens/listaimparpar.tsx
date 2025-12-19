import { BotaoCustomizado } from '@/components/botaoCustomizado';
import { InputCustomizado } from '@/components/inputCustomizado';
import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

export function listaImparPar() {
  const [item, setItem] = useState('');
  const [lista, setLista] = useState<number[]>([]);

  function verificaImparPar() {
    setLista([...lista, Number(item)]);
    setItem('');
  }
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text -4xl m-3">Lista Impar Par</Text>
      <InputCustomizado placeholder={'Digite um número'} value={item} onChangeText={setItem} />
      <BotaoCustomizado title="Verificar Impar ou Par" onPress={verificaImparPar} />
      <BotaoCustomizado title="Voltar" onPress={() => {}} />

      <ScrollView className="my-5 w-full gap-5 rounded-lg border border-gray-300 p-3">
        {lista.map((num, index) => (
          <Text key={index} className="text-2xl">
            {num} {num % 2 === 0 ? 'par' : 'impar'}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}
