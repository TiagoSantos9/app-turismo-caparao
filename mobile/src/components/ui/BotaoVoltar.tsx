import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, radius } from "../../theme";

interface Props {
  aoPressionar: () => void;
  sobreImagem?: boolean;
}

// Reutilizado em duas situações: seta de voltar simples (telas de
// categoria) e seta flutuante sobre a imagem grande (tela de detalhes).
export default function BotaoVoltar({ aoPressionar, sobreImagem = false }: Props) {
  return (
    <Pressable
      onPress={aoPressionar}
      style={[styles.base, sobreImagem && styles.flutuante]}
      hitSlop={12}
    >
      <Ionicons
        name="arrow-back"
        size={20}
        color={sobreImagem ? colors.texto.primario : colors.texto.sobreGradiente}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    width: 36,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
  },
  flutuante: {
    backgroundColor: colors.superficie,
    borderRadius: radius.pill,
  },
});
