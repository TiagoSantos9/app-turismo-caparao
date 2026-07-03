import { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import CardLocal from "../components/CardLocal";
import api from "../services/Api";

export default function HomeScreen() {
  const [locais, setLocais] = useState([]);

  useEffect(() => {
    async function carregarLocais() {
      try {
        const response = await api.get("/locais");
        setLocais(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    carregarLocais();
  }, []);

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        Turismo Caparaó
      </Text>

      {locais.map((local) => (
     <CardLocal
    key={local.id}
    local={local}
  />
      ))}
    </ScrollView>
  );
}