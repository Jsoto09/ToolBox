import React, { useEffect, useState } from 'react';
import { Image, Linking, Pressable, Text, View } from 'react-native';
import { ErrorMsg, Loading, Screen } from '../Components/UI';
import { WP_SITE } from '../Config';
import { getJSON, stripHtml, useRequest } from '../Utils';
import { s } from '../Temas';

export default function Noticias() {
  const [site, setSite] = useState(null);
  const [posts, setPosts] = useState([]);
  const { loading, error, run } = useRequest();

  useEffect(() => {
    run(async () => {
      const host = new URL(WP_SITE).hostname;
      let name = host;
      let logo = `https://www.google.com/s2/favicons?domain=${host}&sz=128`;
      try {
        const info = await getJSON(`${WP_SITE}/wp-json`);
        name = info.name || host;
        if (info.site_icon_url) logo = info.site_icon_url;
      } catch {

       }
      setSite({ name, logo });
      setPosts(await getJSON(`${WP_SITE}/wp-json/wp/v2/posts?per_page=3&_fields=id,link,title,excerpt`));
    });
  }, []);

  return (
    <Screen>
      {site && (
        <View style={s.siteHead}>
          <Image source={{ uri: site.logo }} style={s.logo} resizeMode="contain" />
          <Text style={s.cardTitle}>{site.name}</Text>
        </View>
      )}
      {loading && <Loading />}
      <ErrorMsg text={error} />
      {posts.map((n) => (
        <View key={n.id} style={s.card}>
          <Text style={s.cardTitle}>{stripHtml(n.title.rendered)}</Text>
          <Text style={s.body}>{stripHtml(n.excerpt.rendered)}</Text>
          <Pressable onPress={() => Linking.openURL(n.link)}>
            <Text style={s.link}>Visitar</Text>
          </Pressable>
        </View>
      ))}
    </Screen>
  );
}