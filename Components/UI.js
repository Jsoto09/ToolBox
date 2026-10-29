import React from 'react';
import { ActivityIndicator, Pressable, ScrollView, Text, TextInput, View } from 'react-native';
import { C, s } from '../Temas';

export function Screen({ children }) {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: C.bg }} contentContainerStyle={s.screen}
      keyboardShouldPersistTaps="handled">
      {children}
    </ScrollView>
  );
}

export function Btn({ title, onPress, disabled }) {
  return (
    <Pressable onPress={onPress} disabled={disabled}
      style={({ pressed }) => [s.btn, pressed && { opacity: 0.8 }, disabled && { opacity: 0.5 }]}>
      <Text style={s.btnText}>{title}</Text>
    </Pressable>
  );
}

export function Input(props) {
  return <TextInput placeholderTextColor={C.steel} autoCapitalize="none" autoCorrect={false}
    style={s.input} {...props} />;
}

export const Loading = () => <ActivityIndicator size="large" color={C.orange} style={{ marginTop: 24 }} />;
export const ErrorMsg = ({ text }) => (text ? <Text style={s.error}>{text}</Text> : null);

export const Row = ({ k, v }) => (
  <View style={s.row}>
    <Text style={s.rowK}>{k}</Text>
    <Text style={s.rowV}>{v}</Text>
  </View>
);

export const DarkRow = ({ k, v }) => (
  <View style={s.row}>
    <Text style={[s.rowK, { color: '#AEB6BE' }]}>{k}</Text>
    <Text style={[s.rowV, { color: C.white }]}>{v}</Text>
  </View>
);