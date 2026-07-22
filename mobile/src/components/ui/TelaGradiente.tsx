import { ReactNode } from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { colors } from "../../theme";

interface Props {
  children: ReactNode;
}

// Wrapper de tela usado em Home, categorias e detalhes: aplica o
// gradiente teal -> roxo de fundo (igual em todas as telas do protótipo)
// e respeita a área segura do aparelho (notch, barra de status).
export default function TelaGradiente({ children }: Props) {
  return (
    <LinearGradient
      colors={[colors.gradiente.inicio, colors.gradiente.fim]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0.3, y: 1 }}
      style={styles.gradiente}
    >
      <SafeAreaView style={styles.area}>{children}</SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradiente: {
    flex: 1,
  },
  area: {
    flex: 1,
  },
});
