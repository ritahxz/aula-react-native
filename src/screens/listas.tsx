import { BotaoCustomizado } from '@/components/botaoCustomizado';
import { InputCustomizado } from '@/components/inputCustomizado';
import { useState } from 'react';
import { Button, Text, View } from 'react-native';

export function ListasScreen() {
  const [item, setItem] = useState('');
  const [lista, setLista] = useState<string[]>([]);

  function adicionaItem() {
    setLista([...lista, item]);
    setItem('');
  }

  function limpaLista() {
    setLista([]);
  }
  return (
    <View className="flex-1 items-center gap-4 p-3">
      <Text className="text -4xl m-3">Lista de itens</Text>
      <InputCustomizado placeholder="item" value={item} onChangeText={(text) => setItem(text)} />
      <BotaoCustomizado title="Adicionar item" onPress={adicionaItem} />
      <BotaoCustomizado title="Limpar lista" onPress={limpaLista} />

      <View>
        {lista.map((item, index) => (
          <Text key={index} className="text-xl">
            {item}
          </Text>
        ))}
      </View>
    </View>
  );
}
