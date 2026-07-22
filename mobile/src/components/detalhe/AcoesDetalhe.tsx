import { View, StyleSheet } from "react-native";
import Botao from "../ui/Botao";
import { spacing } from "../../theme";

interface Props {
  aoVerRota: () => void;
  aoSalvar: () => void;
  salvo: boolean;
}

// "Ver rota" abre o app de mapas do aparelho com a coordenada do local
// (não precisa de nenhuma rota de API nova). "Salvar" alterna o
// favorito local — ver hooks/useFavoritos.ts.
export default function AcoesDetalhe({ aoVerRota, aoSalvar, salvo }: Props) {
  return (
    <View style={styles.container}>
      <Botao texto="Ver rota" icone="navigate-outline" aoPressionar={aoVerRota} flex />
      <Botao
        texto={salvo ? "Salvo" : "Salvar"}
        icone={salvo ? "heart" : "heart-outline"}
        variante="contorno"
        aoPressionar={aoSalvar}
        flex
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: spacing.sm,
    marginTop: spacing.md,
  },
});
