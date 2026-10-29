import { StyleSheet } from 'react-native';

export const C = {
  bg: '#E9ECEF', ink: '#25282C', steel: '#5C6670', white: '#FFFFFF',
  yellow: '#FFC400', orange: '#E8590C', blue: '#2F7DE1', pink: '#EC4899',
  line: '#CBD1D7',
};

export const s = StyleSheet.create({
  screen: { padding: 16, paddingBottom: 40 },
  hero: { width: '100%', height: 200, borderRadius: 6, backgroundColor: C.line },
  title: { fontSize: 28, fontWeight: '800', color: C.ink, marginTop: 14 },
  sub: { fontSize: 15, color: C.steel, marginTop: 2 },
  body: { fontSize: 15, lineHeight: 22, color: C.ink, marginTop: 6 },
  menuItem: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: C.white,
    padding: 14, marginBottom: 8, borderRadius: 6, borderLeftWidth: 5, borderLeftColor: C.orange,
  },
  menuLabel: { fontSize: 17, fontWeight: '700', color: C.ink },
  menuHint: { fontSize: 13, color: C.steel, marginTop: 1 },
  chevron: { fontSize: 26, color: C.steel },
  input: {
    backgroundColor: C.white, borderWidth: 1, borderColor: C.line, borderRadius: 6,
    paddingHorizontal: 14, paddingVertical: 12, fontSize: 16, color: C.ink, marginBottom: 10,
  },
  btn: { backgroundColor: C.orange, padding: 14, borderRadius: 6, alignItems: 'center', marginVertical: 8 },
  btnText: { color: C.white, fontWeight: '800', fontSize: 16 },
  error: { color: '#B42318', marginTop: 8, fontSize: 14 },
  empty: { color: C.steel, marginTop: 16, fontSize: 15 },
  card: { backgroundColor: C.white, borderRadius: 6, padding: 16, marginTop: 12 },
  cardTitle: { fontSize: 18, fontWeight: '800', color: C.ink },
  row: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 6 },
  rowK: { fontSize: 14, color: C.steel },
  rowV: { fontSize: 15, fontWeight: '700', color: C.ink, flexShrink: 1, textAlign: 'right' },
  link: { color: C.blue, fontWeight: '700', marginTop: 8, fontSize: 15 },
  avatar: { width: 120, height: 120, borderRadius: 60, alignSelf: 'center', marginBottom: 12, backgroundColor: C.line },
  poke: { width: '100%', height: 220 },
  chips: { flexDirection: 'row', flexWrap: 'wrap', marginTop: 6 },
  chip: { backgroundColor: C.yellow, borderRadius: 4, paddingHorizontal: 10, paddingVertical: 5, marginRight: 6, marginBottom: 6 },
  chipText: { fontWeight: '700', color: C.ink, textTransform: 'capitalize' },
  genderPanel: { marginTop: 16, borderRadius: 6, padding: 32, alignItems: 'center' },
  genderName: { fontSize: 20, color: C.white, textTransform: 'capitalize' },
  genderText: { fontSize: 34, fontWeight: '900', color: C.white, marginTop: 6 },
  genderProb: { fontSize: 15, color: C.white, marginTop: 8 },
  bigTemp: { fontSize: 64, fontWeight: '900', color: C.yellow },
  weatherDesc: { fontSize: 18, color: C.white },
  siteHead: { alignItems: 'center', backgroundColor: C.white, borderRadius: 6, padding: 16 },
  logo: { width: 72, height: 72, marginBottom: 8 },
});