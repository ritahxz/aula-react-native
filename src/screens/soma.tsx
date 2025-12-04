import { BotaoCustomizado } from "@/components/botaoCustomizado";
import { InputCustomizado } from "@/components/inputCustomizado";
import { use, useEffect, useState } from "react";
import { Text, View } from "react-native";


export function Soma () {
    const [valor1, setValor1] = useState("");
    const [valor2, setValor2] = useState("");
    const [resultado, setResultado ] = useState(0);  

    function somar() {
        const soma = Number(valor1) + Number(valor2);
        setResultado(soma);
    }
       useEffect(() => {
        setResultado(0);
    }, [valor1, valor2]);
    
  return (
    <View className="flex-1 items-center justify-center">
        <View className='w-full p-5 gap-5 items-center'> 
            <Text className="text 2xl">Soma</Text>
            <InputCustomizado placeholder="Valor 1" keyboardType="numeric" onChangeText={(text) => setValor1(text)}/>
            <InputCustomizado placeholder="Valor 2" keyboardType="numeric" onChangeText={(text) => setValor2(text)}/>
            <BotaoCustomizado title="Somar" onPress={somar}/>

            <Text className="text-4xl">Resultado:{resultado}</Text>
        </View>
    </View>
  )
}