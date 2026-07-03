import { useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { useLocalSearchParams } from "expo-router";
import api from "../../services/Api";

interface Local {
  id: number;
  nome: string;
  descricao: string;
  cidade: string;
  avaliacao: number;
  imagem: string;
}

export default function Detalhes() {
  const { id } = useLocalSearchParams();

  const [local, setLocal] = useState<Local | null>(null);

  useEffect(() => {
    async function carregarLocal() {
      try {
        const response = await api.get(`/locais/${id}`);
        setLocal(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    carregarLocal();
  }, []);

  if (!local) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>Carregando...</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <Image
        source={{ uri: local.imagem }}
        style={{
          width: "100%",
          height: 250,
        }}
        resizeMode="cover"
      />

      <View style={{ padding: 20 }}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          {local.nome}
        </Text>

        <Text
          style={{
            marginTop: 10,
            fontSize: 18,
          }}
        >
          📍 {local.cidade}
        </Text>

        <Text
          style={{
            marginTop: 10,
            fontSize: 18,
          }}
        >
          ⭐ {local.avaliacao}
        </Text>

        <Text
          style={{
            marginTop: 20,
            fontSize: 17,
            lineHeight: 28,
          }}
        >
          {local.descricao}
        </Text>
      </View>
    </ScrollView>
  );
}