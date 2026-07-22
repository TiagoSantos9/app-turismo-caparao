import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, typography, spacing } from "../../theme";

interface Props {
  icone: keyof typeof Ionicons.glyphMap;
  texto: string;
  cor?: string;
}

// Um item da fileira de metadados na tela de detalhes
// (ex: "📍 2.3 km", "⛰ Difícil", "🕐 6h", "🥾 Trilha").
export default function ItemMeta({ icone, texto, cor = colors.texto.secundario }: Props) {
  return (
    <View style={styles.container}>
      <Ionicons name={icone} size={15} color={cor} />
      <Text style={[styles.texto, { color: cor }]}>{texto}</Text>
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
    ...typography.legenda,
    fontWeight: "600",
  },
});
