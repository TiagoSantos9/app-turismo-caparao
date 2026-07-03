import { Image, Pressable, Text, View } from "react-native";
import { router } from "expo-router";

interface Local {
  id: number;
  nome: string;
  cidade: string;
  descricao: string;
  avaliacao: number;
  imagem: string;
  latitude: number;
  longitude: number;
}

interface Props {
  local: Local;
}

export default function CardLocal({ local }: Props) {
  return (
    <Pressable
      onPress={() => router.push(`/detalhes/${local.id}`)}
      style={{
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 12,
        padding: 12,
        marginBottom: 15,
        backgroundColor: "#fff",
      }}
    >
      {local.imagem && (
        <Image
          source={{ uri: local.imagem }}
          style={{
            width: "100%",
            height: 180,
            borderRadius: 10,
            marginBottom: 10,
          }}
          resizeMode="cover"
        />
      )}

      <Text
        style={{
          fontSize: 22,
          fontWeight: "bold",
        }}
      >
        {local.nome}
      </Text>

      <Text
        style={{
          color: "#666",
          marginTop: 4,
        }}
      >
        📍 {local.cidade}
      </Text>

      <Text
        style={{
          marginTop: 6,
        }}
      >
        ⭐ {local.avaliacao}
      </Text>
    </Pressable>
  );
}