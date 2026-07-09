import { View, Text, Pressable, Linking } from "react-native";

interface Props {
  latitude: number;
  longitude: number;
  titulo: string;
  descricao?: string;
}

// Versão usada quando o app roda no navegador (arquivo .web.tsx).
// react-native-maps não tem build para web (ele importa módulos nativos
// do React Native que quebram o bundler web). Por isso o Metro precisa
// de um arquivo .web.tsx separado — aqui mostramos um cartão simples
// com link para abrir a localização no Google Maps.
export default function MapaLocal({ latitude, longitude, titulo }: Props) {
  const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

  return (
    <View
      style={{
        width: "100%",
        marginTop: 20,
        padding: 20,
        borderRadius: 12,
        backgroundColor: "#f0f0f0",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 15, marginBottom: 10, textAlign: "center" }}>
        O mapa interativo está disponível apenas no aplicativo mobile.
      </Text>
      <Pressable onPress={() => Linking.openURL(url)}>
        <Text style={{ color: "#208AEF", fontWeight: "bold" }}>
          Ver "{titulo}" no Google Maps
        </Text>
      </Pressable>
    </View>
  );
}
