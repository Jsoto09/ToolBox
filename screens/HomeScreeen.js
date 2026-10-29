import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import { TOOLBOX_IMG } from '../Config';
import { Screen } from '../Components/UI';
import { s } from '../Temas';

const MENU = [
  ['Genero', 'Predecir género', 'Escribe un nombre'],
  ['Persona', 'Persona aleatoria', 'Perfil al azar'],
  ['Universidades', 'Universidades', 'Busca por país'],
  ['Clima', 'Clima en RD', 'El día de hoy'],
  ['Pokemon', 'Pokémon', 'Foto, datos y sonido'],
  ['Noticias', 'Noticias WordPress', 'Últimas 3 publicaciones'],
  ['Acerca', 'Acerca de', 'Información']
];

export default function Home({ navigation }) {
  return (
    <Screen>
      <Image source={TOOLBOX_IMG} style={s.hero} resizeMode="cover" />
      <Text style={s.title}>Caja de herramientas</Text>
      <Text style={s.sub}>Siete utilidades en una sola app.</Text>
      <View style={{ marginTop: 16 }}>
        {MENU.map(([route, label, hint]) => (
          <Pressable key={route} onPress={() => navigation.navigate(route)}
            style={({ pressed }) => [s.menuItem, pressed && { backgroundColor: '#F7F8F9' }]}>
            <View style={{ flex: 1 }}>
              <Text style={s.menuLabel}>{label}</Text>
              <Text style={s.menuHint}>{hint}</Text>
            </View>
            <Text style={s.chevron}>›</Text>
          </Pressable>
        ))}
      </View>
    </Screen>
  );
}