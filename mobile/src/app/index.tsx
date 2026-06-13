import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { api } from "../services/Api";

export default function HomeScreen() {
  const [locais, setLocais] = useState([]);

  useEffect(() => {
    api.get("/locais")
      .then((response) => {
        setLocais(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {locais.map((local: any) => (
        <Text key={local.id}>{local.nome}</Text>
      ))}
    </View>
  );
}