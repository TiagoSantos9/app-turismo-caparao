import { View, ActivityIndicator, Text, StyleSheet } from "react-native";
import { colors, typography, spacing } from "../theme";

interface Props {
  mensagem?: string;
}

// Sempre usado dentro de TelaGradiente, por isso texto/spinner brancos.
export default function EstadoCarregando({ mensagem }: Props) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.superficie} />
      {mensagem ? <Text style={styles.texto}>{mensagem}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  texto: {
    ...typography.corpo,
    color: colors.texto.sobreGradiente,
    marginTop: spacing.sm,
  },
});
