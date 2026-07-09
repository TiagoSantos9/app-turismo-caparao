import MapView, { Marker } from "react-native-maps";

interface Props {
  latitude: number;
  longitude: number;
  titulo: string;
  descricao?: string;
}

// Versão usada em iOS/Android (arquivo .native.tsx).
// O Metro escolhe este arquivo automaticamente ao compilar para o app nativo.
export default function MapaLocal({ latitude, longitude, titulo, descricao }: Props) {
  return (
    <MapView
      style={{ width: "100%", height: 300, marginTop: 20, borderRadius: 12 }}
      initialRegion={{
        latitude,
        longitude,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02,
      }}
    >
      <Marker coordinate={{ latitude, longitude }} title={titulo} description={descricao} />
    </MapView>
  );
}
