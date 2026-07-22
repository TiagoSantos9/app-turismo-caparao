import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, typography, spacing } from "../theme";

interface Props {
  mensagem: string;
}

export default function EstadoErro({ mensagem }: Props) {
  return (
    <View style={styles.container}>
      <Ionicons name="alert-circle-outline" size={32} color={colors.texto.sobreGradiente} />
      <Text style={styles.texto}>{mensagem}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: spacing.lg,
    gap: spacing.sm,
  },
  texto: {
    ...typography.corpo,
    color: colors.texto.sobreGradiente,
    textAlign: "center",
  },
});
