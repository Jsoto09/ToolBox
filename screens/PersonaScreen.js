import React, { useEffect, useState } from 'react';
import { Image, View } from 'react-native';
import { Btn, ErrorMsg, Loading, Row, Screen } from '../Components/UI';
import { calcAge, getJSON, useRequest } from '../Utils';
import { s } from '../Temas';

export default function Persona() {
  const [p, setP] = useState(null);
  const { loading, error, run } = useRequest();

  const load = () => run(async () => {
    const d = await getJSON('https://randomuser.me/api/?results=1');
    setP(d.results[0]);
  });
  useEffect(() => { load(); }, []);

  return (
    <Screen>
      {loading && <Loading />}
      <ErrorMsg text={error} />
      {p && !loading && (
        <View style={s.card}>
          <Image source={{ uri: p.picture.large }} style={s.avatar} />
          <Row k="Nombre" v={p.name.first} />
          <Row k="Apellido" v={p.name.last} />
          <Row k="Nacimiento" v={new Date(p.dob.date).toLocaleDateString('es-DO')} />
          <Row k="Edad" v={`${calcAge(p.dob.date)} años`} />
        </View>
      )}
      <Btn title="Otra persona" onPress={load} disabled={loading} />
    </Screen>
  );
}