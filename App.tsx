import { StatusBar } from 'expo-status-bar';

import './global.css';
import { LoginScreen } from '@/screens/login';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Soma } from '@/screens/soma';
import { ListasScreen } from '@/screens/listas';
import TelaSoma from '@/screens/telasoma';
import TelaContador from '@/screens/telacontador';

export default function App() {
  return (
    <>
    <SafeAreaView className="flex-1">
      <TelaContador/>
      
    </SafeAreaView>
    <StatusBar style="auto" />
    </>
  );
}
