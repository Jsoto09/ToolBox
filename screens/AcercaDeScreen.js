import React from 'react';
import { Image, Linking, Pressable, Text, View } from 'react-native';
import { Screen } from '../Components/UI';
import { PROFILE } from '../Config';
import { s } from '../Temas';

export default function Acerca() {
  const items = [
    ['Correo', PROFILE.email, `mailto:${PROFILE.email}`],
    ['Teléfono', PROFILE.telefono, `tel:${PROFILE.telefono.replace(/\s/g, '')}`],
    ['GitHub', PROFILE.github, PROFILE.github]
  ];
  return (
    <Screen>
      <View style={[s.card, { alignItems: 'center' }]}>
        <Image source={PROFILE.foto} style={s.avatar} />
        <Text style={s.cardTitle}>{PROFILE.nombre}</Text>
        <Text style={s.sub}>{PROFILE.rol}</Text>
      </View>
      <Text style={[s.body, { marginVertical: 12 }]}>
        Disponible para proyectos y oportunidades laborales. Contáctame por cualquiera de estos medios:
      </Text>
      {items.map(([k, v, url]) => (
        <Pressable key={k} onPress={() => Linking.openURL(url)} style={s.menuItem}>
          <View style={{ flex: 1 }}>
            <Text style={s.menuHint}>{k}</Text>
            <Text style={s.menuLabel}>{v}</Text>
          </View>
        </Pressable>
      ))}
    </Screen>
  );
}