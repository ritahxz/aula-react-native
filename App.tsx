import { StatusBar } from 'expo-status-bar';

import './global.css';
import { LoginScreen } from '@/screens/login';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Soma } from '@/screens/soma';
import { ListasScreen } from '@/screens/listas';
import TelaSoma from '@/screens/telasoma';
import TelaContador from '@/screens/telacontador';
import TelaParImpar from '@/screens/telaimparpar';
import TelaMedia from '@/screens/telamedia';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <SafeAreaView className="flex-1">
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Soma" component={TelaSoma} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
      <StatusBar style="auto" />
    </>
  );
}
