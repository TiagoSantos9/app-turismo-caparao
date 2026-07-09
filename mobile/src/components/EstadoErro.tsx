import { View, Text } from "react-native";

interface Props {
  mensagem: string;
}

export default function EstadoErro({ mensagem }: Props) {
  return (
    <View
      style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20 }}
    >
      <Text style={{ fontSize: 16, textAlign: "center" }}>{mensagem}</Text>
    </View>
  );
}
