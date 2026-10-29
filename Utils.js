import { useState } from 'react';

export const getJSON = async (url) => {
  const r = await fetch(url);
  if (!r.ok) throw new Error(`Error ${r.status}`);
  return r.json();
};

export const stripHtml = (s = '') =>
  s.replace(/<[^>]*>/g, '').replace(/&#8217;/g, '’').replace(/&#8230;/g, '…')
    .replace(/&hellip;/g, '…').replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').trim();

export const calcAge = (iso) => {
  const b = new Date(iso), n = new Date();
  let a = n.getFullYear() - b.getFullYear();
  if (n < new Date(n.getFullYear(), b.getMonth(), b.getDate())) a--;
  return a;
};

export function useRequest() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const run = async (fn) => {
    setLoading(true); setError('');
    try { return await fn(); }
    catch (e) { setError(e.message || 'No se pudo completar la solicitud.'); }
    finally { setLoading(false); }
  };
  return { loading, error, run, setError };
}