//JOHAN GERMAN 2023-1391

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { C } from './Temas';
import Home from './screens/HomeScreeen';
import Genero from './screens/GeneroScreen';
import Persona from './screens/PersonaScreen';
import Universidades from './screens/UniversidadesScreen';
import Clima from './screens/ClimaScreen';
import Pokemon from './screens/PokemonScreen';
import Noticias from './screens/NoticiasScreen';
import AcercaDe from './screens/AcercaDeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: C.yellow },
          headerTintColor: C.ink,
          headerTitleStyle: { fontWeight: '800' },
        }}>
          <Stack.Screen name="Inicio" component={Home} options={{ title: 'Caja de herramientas' }} />
          <Stack.Screen name="Genero" component={Genero} options={{ title: 'Predecir género' }} />
          <Stack.Screen name="Persona" component={Persona} options={{ title: 'Persona aleatoria' }} />
          <Stack.Screen name="Universidades" component={Universidades} />
          <Stack.Screen name="Clima" component={Clima} options={{ title: 'Clima en RD' }} />
          <Stack.Screen name="Pokemon" component={Pokemon} options={{ title: 'Pokémon' }} />
          <Stack.Screen name="Noticias" component={Noticias} options={{ title: 'Noticias WordPress' }} />
          <Stack.Screen name="Acerca" component={AcercaDe} options={{ title: 'Acerca de' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}