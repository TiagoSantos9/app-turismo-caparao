import { Pressable, Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { colors, spacing, radius, typography, shadowCard } from "../../theme";

// Banner "Ver mapa" da Home. Navega para a tela /mapa (nova rota de
// apresentação, sem endpoint novo — reaproveita buscarLocais() já
// existente para plotar todos os pontos).
export default function BotaoMapa() {
  return (
    <Pressable
      onPress={() => router.push("/mapa")}
      style={[styles.container, shadowCard]}
    >
      <View style={styles.iconeArea}>
        <Ionicons name="map-outline" size={20} color={colors.superficie} />
      </View>
      <Text style={styles.texto}>Ver mapa com todos os locais</Text>
      <Ionicons name="chevron-forward" size={18} color={colors.superficie} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.secundaria,
    marginHorizontal: spacing.md,
    marginTop: spacing.md,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.sm,
    borderRadius: radius.lg,
    gap: spacing.sm,
  },
  iconeArea: {
    width: 36,
    height: 36,
    borderRadius: radius.md,
    backgroundColor: "rgba(255,255,255,0.2)",
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    ...typography.corpoNegrito,
    color: colors.texto.sobreGradiente,
    flex: 1,
  },
});
