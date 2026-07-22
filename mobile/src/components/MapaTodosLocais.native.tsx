import MapView, { Marker } from "react-native-maps";
import { router } from "expo-router";
import { Local } from "../types/Local";

interface Props {
  locais: Local[];
}

// Versão nativa (iOS/Android) do mapa geral, usado em app/mapa.tsx.
// Reaproveita os mesmos dados de `locais` já buscados pelo hook
// useLocais existente — nenhuma chamada de API nova.
export default function MapaTodosLocais({ locais }: Props) {
  const pontosValidos = locais.filter(
    (local) => !isNaN(Number(local.latitude)) && !isNaN(Number(local.longitude))
  );

  const regiaoInicial = pontosValidos[0]
    ? {
        latitude: Number(pontosValidos[0].latitude),
        longitude: Number(pontosValidos[0].longitude),
        latitudeDelta: 0.3,
        longitudeDelta: 0.3,
      }
    : undefined;

  return (
    <MapView style={{ flex: 1 }} initialRegion={regiaoInicial}>
      {pontosValidos.map((local) => (
        <Marker
          key={local.id}
          coordinate={{
            latitude: Number(local.latitude),
            longitude: Number(local.longitude),
          }}
          title={local.nome}
          description={local.cidade}
          onCalloutPress={() => router.push(`/detalhes/${local.id}`)}
        />
      ))}
    </MapView>
  );
}
