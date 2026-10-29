import React, { useState } from 'react';
import { Linking, Pressable, Text, View } from 'react-native';
import { Btn, ErrorMsg, Input, Loading, Row, Screen } from '../Components/UI';
import { getJSON, useRequest } from '../Utils';
import { s } from '../Temas';

export default function Universidades() {
  const [country, setCountry] = useState('Dominican Republic');
  const [list, setList] = useState(null);
  const { loading, error, run, setError } = useRequest();

  const search = () => {
    if (!country.trim()) return setError('Escribe un país en inglés.');
    run(async () => {
      const q = country.trim().replace(/\s+/g, '+');
      const d = await getJSON(`https://adamix.net/proxy.php?country=${q}`);
      setList(Array.isArray(d) ? d : []);
    });
  };

  return (
    <Screen>
      <Input value={country} onChangeText={setCountry} placeholder="País en inglés"
        onSubmitEditing={search} returnKeyType="search" />
      <Btn title="Buscar universidades" onPress={search} disabled={loading} />
      <ErrorMsg text={error} />
      {loading && <Loading />}
      {list && !loading && list.length === 0 && (
        <Text style={s.empty}>No se encontraron universidades. Revisa que el país esté en inglés.</Text>
      )}
      {list && !loading && list.map((u, i) => (
        <View key={`${u.name}-${i}`} style={s.card}>
          <Text style={s.cardTitle}>{u.name}</Text>
          <Row k="Dominio" v={(u.domains || []).join(', ') || '—'} />
          {(u.web_pages || []).map((w) => (
            <Pressable key={w} onPress={() => Linking.openURL(w)}>
              <Text style={s.link}>{w}</Text>
            </Pressable>
          ))}
        </View>
      ))}
    </Screen>
  );
}