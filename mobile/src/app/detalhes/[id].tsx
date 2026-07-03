import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function Detalhes() {
  const { id } = useLocalSearchParams();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
        }}
      >
        Local {id}
      </Text>
    </View>
  );
}