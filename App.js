import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ComidaDetalhes from './src/screens/ComidaDetalhes';
import Comida from './src/screens/Comida';
import TelaInicial from './src/screens/TelaInicial';


const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Tela Inicial'>
        <Stack.Screen name='Tela Inicial' component={TelaInicial} />
        <Stack.Screen name='Cardápio' component={Comida} />
        <Stack.Screen name='Detalhes do prato' component={ComidaDetalhes} />
      </Stack.Navigator>
    </NavigationContainer>
  )}
