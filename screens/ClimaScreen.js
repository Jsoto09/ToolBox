import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { DarkRow, ErrorMsg, Loading, Screen } from '../Components/UI';
import { getJSON, useRequest } from '../Utils';
import { C, s } from '../Temas';

const WMO = (c) =>
  c === 0 ? 'Despejado' : c <= 3 ? 'Parcialmente nublado' : c <= 48 ? 'Neblina'
  : c <= 57 ? 'Llovizna' : c <= 67 ? 'Lluvia' : c <= 77 ? 'Nieve'
  : c <= 82 ? 'Chubascos' : c <= 99 ? 'Tormenta eléctrica' : '—';

export default function Clima() {
  const [w, setW] = useState(null);
  const { loading, error, run } = useRequest();

  useEffect(() => {
    run(async () => {
      const url = 'https://api.open-meteo.com/v1/forecast?latitude=18.4861&longitude=-69.9312'
        + '&current=temperature_2m,weather_code,wind_speed_10m,relative_humidity_2m'
        + '&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max'
        + '&timezone=America%2FSanto_Domingo&forecast_days=1';
      setW(await getJSON(url));
    });
  }, []);

  const today = new Date().toLocaleDateString('es-DO', { weekday: 'long', day: 'numeric', month: 'long' });

  return (
    <Screen>
      <Text style={s.sub}>Santo Domingo · {today}</Text>
      {loading && <Loading />}
      <ErrorMsg text={error} />
      {w && !loading && (
        <View style={[s.card, { backgroundColor: C.ink }]}>
          <Text style={s.bigTemp}>{Math.round(w.current.temperature_2m)}°C</Text>
          <Text style={s.weatherDesc}>{WMO(w.current.weather_code)}</Text>
          <View style={{ height: 16 }} />
          <DarkRow k="Máxima" v={`${Math.round(w.daily.temperature_2m_max[0])}°C`} />
          <DarkRow k="Mínima" v={`${Math.round(w.daily.temperature_2m_min[0])}°C`} />
          <DarkRow k="Prob. de lluvia" v={`${w.daily.precipitation_probability_max[0]}%`} />
          <DarkRow k="Humedad" v={`${w.current.relative_humidity_2m}%`} />
          <DarkRow k="Viento" v={`${w.current.wind_speed_10m} km/h`} />
        </View>
      )}
    </Screen>
  );
}