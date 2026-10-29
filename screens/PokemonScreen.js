import React, { useEffect, useRef, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { createAudioPlayer } from 'expo-audio';
import { Btn, ErrorMsg, Input, Loading, Row, Screen } from '../Components/UI';
import { getJSON, useRequest } from '../Utils';
import { s } from '../Temas';

export default function Pokemon() {
  const [name, setName] = useState('pikachu');
  const [p, setP] = useState(null);
  const player = useRef(null);
  const { loading, error, run, setError } = useRequest();

  useEffect(() => () => { player.current?.remove?.(); }, []);

  const search = () => {
    if (!name.trim()) return setError('Escribe el nombre de un Pokémon.');
    run(async () => {
      const d = await getJSON(`https://pokeapi.co/api/v2/pokemon/${encodeURIComponent(name.trim().toLowerCase())}`);
      setP(d);
    });
  };

  const playCry = () => {
    const uri = p?.cries?.latest;
    if (!uri) return setError('Este Pokémon no tiene sonido disponible.');
    try {
      player.current?.remove?.();
      player.current = createAudioPlayer({ uri });
      player.current.play();
    } catch { setError('No se pudo reproducir el sonido en este dispositivo.'); }
  };

  const img = p?.sprites?.other?.['official-artwork']?.front_default || p?.sprites?.front_default;

  return (
    <Screen>
      <Input value={name} onChangeText={setName} placeholder="Nombre en inglés, por ejemplo: pikachu"
        onSubmitEditing={search} returnKeyType="search" />
      <Btn title="Buscar Pokémon" onPress={search} disabled={loading} />
      <ErrorMsg text={error} />
      {loading && <Loading />}
      {p && !loading && (
        <View style={s.card}>
          <Image source={{ uri: img }} style={s.poke} resizeMode="contain" />
          <Text style={[s.cardTitle, { textAlign: 'center', textTransform: 'capitalize' }]}>{p.name}</Text>
          <Row k="Experiencia base" v={String(p.base_experience ?? '—')} />
          <Text style={[s.rowK, { marginTop: 8 }]}>Habilidades</Text>
          <View style={s.chips}>
            {p.abilities.map((a) => (
              <View key={a.ability.name} style={s.chip}>
                <Text style={s.chipText}>{a.ability.name}</Text>
              </View>
            ))}
          </View>
          <Btn title="Reproducir sonido" onPress={playCry} />
        </View>
      )}
    </Screen>
  );
}