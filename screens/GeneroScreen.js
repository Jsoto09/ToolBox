import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Btn, ErrorMsg, Input, Loading, Screen } from '../Components/UI';
import { getJSON, useRequest } from '../Utils';
import { C, s } from '../Temas';

export default function Genero() {
  const [name, setName] = useState('');
  const [res, setRes] = useState(null);
  const { loading, error, run, setError } = useRequest();

  const predict = () => {
    if (!name.trim()) return setError('Escribe un nombre.');
    run(async () => {
      const d = await getJSON(`https://api.genderize.io/?name=${encodeURIComponent(name.trim())}`);
      setRes(d);
    });
  };

  const male = res?.gender === 'male';
  const known = !!res?.gender;
  const color = !res ? C.line : !known ? C.steel : male ? C.blue : C.pink;

  return (
    <Screen>
      <Input value={name} onChangeText={setName} placeholder="Nombre, por ejemplo: irma"
        onSubmitEditing={predict} returnKeyType="search" />
      <Btn title="Predecir género" onPress={predict} disabled={loading} />
      <ErrorMsg text={error} />
      {loading && <Loading />}
      {res && !loading && (
        <View style={[s.genderPanel, { backgroundColor: color }]}>
          <Text style={s.genderName}>{res.name}</Text>
          <Text style={s.genderText}>
            {!known ? 'No hay datos suficientes' : male ? 'Masculino' : 'Femenino'}
          </Text>
          {known && <Text style={s.genderProb}>Probabilidad {Math.round(res.probability * 100)}%</Text>}
        </View>
      )}
    </Screen>
  );
}