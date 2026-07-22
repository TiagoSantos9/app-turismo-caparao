import { Pressable, Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, spacing, radius, typography } from "../../theme";

interface Props {
  rotulo: string;
  icone: keyof typeof Ionicons.glyphMap;
  cor: string;
  aoPressionar: () => void;
}

// Um dos 4 ícones coloridos de categoria na Home (trilhas, cachoeiras,
// restaurantes, hospedagens).
export default function CategoriaIconeBotao({ rotulo, icone, cor, aoPressionar }: Props) {
  return (
    <Pressable onPress={aoPressionar} style={styles.container}>
      <View style={[styles.icone, { backgroundColor: cor }]}>
        <Ionicons name={icone} size={24} color={colors.superficie} />
      </View>
      <Text style={styles.rotulo} numberOfLines={1}>
        {rotulo}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: 72,
    gap: spacing.xs,
  },
  icone: {
    width: 56,
    height: 56,
    borderRadius: radius.lg,
    alignItems: "center",
    justifyContent: "center",
  },
  rotulo: {
    ...typography.pequeno,
    color: colors.texto.sobreGradiente,
  },
});
