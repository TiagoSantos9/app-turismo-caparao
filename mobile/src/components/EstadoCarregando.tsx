import { View, ActivityIndicator, Text } from "react-native";

interface Props {
  mensagem?: string;
}

export default function EstadoCarregando({ mensagem }: Props) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
      {mensagem ? <Text style={{ marginTop: 10 }}>{mensagem}</Text> : null}
    </View>
  );
}
