import { Image, View, StyleSheet } from "react-native";
import BotaoVoltar from "../ui/BotaoVoltar";
import { spacing } from "../../theme";

interface Props {
  uri: string;
  aoVoltar: () => void;
}

// Imagem grande no topo da tela de detalhes, com a seta de voltar
// flutuando por cima (como no protótipo).
export default function ImagemDestaque({ uri, aoVoltar }: Props) {
  return (
    <View>
      <Image source={{ uri }} style={styles.imagem} resizeMode="cover" />
      <View style={styles.botaoVoltar}>
        <BotaoVoltar aoPressionar={aoVoltar} sobreImagem />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imagem: {
    width: "100%",
    height: 280,
  },
  botaoVoltar: {
    position: "absolute",
    top: spacing.md,
    left: spacing.md,
  },
});
