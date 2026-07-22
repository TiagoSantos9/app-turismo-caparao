import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, typography, spacing } from "../../theme";

interface Props {
  nota: number;
  tamanho?: number;
}

// Estrela + nota, reutilizada no card da lista e na tela de detalhes.
export default function Avaliacao({ nota, tamanho = 14 }: Props) {
  return (
    <View style={styles.container}>
      <Ionicons name="star" size={tamanho} color={colors.avaliacao} />
      <Text style={[styles.texto, { fontSize: tamanho }]}>{Number(nota).toFixed(1)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.xs / 2,
  },
  texto: {
    ...typography.corpoNegrito,
    color: colors.texto.primario,
  },
});
