import { BotaoCustomizado } from '@/components/botaoCustomizado';
import { InputCustomizado } from '@/components/inputCustomizado';
import { useState } from 'react';
import { Text, View, ViewComponent } from 'react-native';

export function LoginScreen() {
  const [Login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  function logar () {
    console.log("login", Login, "senha", senha);
  }
  return ( 
    <View className="flex-1 items-center justify-center ">
      <View className="w-full items-center justify-center gap-5 p-5">
        <Text className="text-3xl">Nosso app</Text>
        <InputCustomizado
          placeholder={'Login'}
          onChangeText={(text) => {
            setLogin(text);
          }}
        />
        <InputCustomizado 
          placeholder={'Senha'}
          secureTextEntry={true} 
          onChangeText={(text) => setSenha(text)} 
        />
        <BotaoCustomizado title="Entrar" onPress={(logar)}/>
        
        <View className="flex-row gap-4">
        <Text className="text-blue-600" text-xl >CADASTRE-SE</Text>
        <Text className="text-black">|</Text>
        <Text className="text-blue-600" text-xl>ESQUECEU SENHA?</Text>
     
      </View>
    </View>
    </View>
  );
}
