import { Image, ScrollView, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { useLocalDetalhe } from "../../hooks/useLocalDetalhe";
import EstadoCarregando from "../../components/EstadoCarregando";
import EstadoErro from "../../components/EstadoErro";
import MapaLocal from "../../components/MapaLocal";

export default function Detalhes() {
  // useLocalSearchParams pode retornar string | string[] | undefined.
  // Tratamos os três casos explicitamente em vez de assumir que sempre
  // vem uma string (foi aqui que o bug original "ID recebido: undefined"
  // acontecia, antes de existir o app/detalhes/_layout.tsx).
  const params = useLocalSearchParams<{ id?: string | string[] }>();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const { local, carregando, erro } = useLocalDetalhe(id);

  if (carregando) {
    return <EstadoCarregando mensagem="Carregando..." />;
  }

  if (erro || !local) {
    return <EstadoErro mensagem={erro ?? "Local não encontrado."} />;
  }

  const latitude = Number(local.latitude);
  const longitude = Number(local.longitude);
  const coordenadasValidas = !isNaN(latitude) && !isNaN(longitude);

  return (
    <ScrollView>
      {local.imagem ? (
        <Image
          source={{ uri: local.imagem }}
          style={{ width: "100%", height: 250 }}
          resizeMode="cover"
        />
      ) : null}

      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>{local.nome}</Text>

        <Text style={{ marginTop: 10, fontSize: 18 }}>📍 {local.cidade}</Text>

        <Text style={{ marginTop: 10, fontSize: 18 }}>⭐ {local.avaliacao}</Text>

        <Text style={{ marginTop: 20, fontSize: 17, lineHeight: 28 }}>
          {local.descricao}
        </Text>

        {coordenadasValidas ? (
          <MapaLocal
            latitude={latitude}
            longitude={longitude}
            titulo={local.nome}
            descricao={local.descricao}
          />
        ) : (
          <Text style={{ marginTop: 20, color: "#999" }}>
            Localização não disponível no mapa.
          </Text>
        )}
      </View>
    </ScrollView>
  );
}
