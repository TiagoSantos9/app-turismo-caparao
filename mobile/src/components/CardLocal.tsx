import { Image, Pressable, Text } from "react-native";
import { router } from "expo-router";
import { Local } from "../types/Local";

interface Props {
  local: Local;
}

export default function CardLocal({ local }: Props) {
  function abrirDetalhes() {
    // Guarda de segurança: nunca navega com um id vazio/undefined,
    // que era exatamente o que gerava a URL /locais/undefined no backend.
    if (!local?.id) {
      console.warn("CardLocal: local sem ID válido, navegação cancelada.");
      return;
    }
    router.push(`/detalhes/${local.id}`);
  }

  return (
    <Pressable onPress={abrirDetalhes} style={{ marginBottom: 20 }}>
      {local.imagem ? (
        <Image
          source={{ uri: local.imagem }}
          style={{ width: "100%", height: 180, borderRadius: 10, marginBottom: 10 }}
          resizeMode="cover"
        />
      ) : null}

      <Text style={{ fontSize: 22, fontWeight: "bold" }}>{local.nome}</Text>
      <Text style={{ color: "#666", marginTop: 4 }}>📍 {local.cidade}</Text>
      <Text style={{ marginTop: 6 }}>⭐ {local.avaliacao}</Text>
    </Pressable>
  );
}
