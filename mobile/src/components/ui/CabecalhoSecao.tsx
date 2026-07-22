import { View, Text, StyleSheet } from "react-native";
import BotaoVoltar from "./BotaoVoltar";
import { colors, spacing, typography } from "../../theme";

interface Props {
  titulo: string;
  aoVoltar: () => void;
}

// Usado nas 4 telas de categoria: seta de voltar + título da seção,
// logo abaixo do CabecalhoApp.
export default function CabecalhoSecao({ titulo, aoVoltar }: Props) {
  return (
    <View style={styles.container}>
      <BotaoVoltar aoPressionar={aoVoltar} />
      <Text style={styles.titulo}>{titulo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    paddingHorizontal: spacing.md,
    marginTop: spacing.md,
    marginBottom: spacing.sm,
  },
  titulo: {
    ...typography.titulo2,
    color: colors.texto.sobreGradiente,
  },
});
