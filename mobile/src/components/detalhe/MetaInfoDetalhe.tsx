import { View, StyleSheet } from "react-native";
import ItemMeta from "../ui/ItemMeta";
import { colors, spacing } from "../../theme";
import {
  formatarDistancia,
  formatarDuracao,
  ROTULO_DIFICULDADE,
} from "../../utils/distancia";
import { Local } from "../../types/Local";

interface Props {
  local: Local;
  distanciaKm: number | null;
}

// Fileira de metadados da tela de detalhes ("2.3 km", "Difícil", "6h",
// "Trilha"). Cada item só aparece se o dado existir — locais cadastrados
// antes da migração 002 (sem dificuldade/duração) continuam exibindo
// normalmente, só sem esses badges específicos.
export default function MetaInfoDetalhe({ local, distanciaKm }: Props) {
  const temAlgumItem =
    distanciaKm !== null || local.dificuldade || local.duracao_minutos || local.categoria_nome;

  if (!temAlgumItem) return null;

  return (
    <View style={styles.container}>
      {distanciaKm !== null && (
        <ItemMeta icone="navigate-outline" texto={`${formatarDistancia(distanciaKm)} de você`} />
      )}

      {local.dificuldade && (
        <ItemMeta
          icone="trending-up-outline"
          texto={ROTULO_DIFICULDADE[local.dificuldade]}
          cor={colors.dificuldade[local.dificuldade]}
        />
      )}

      {!!local.duracao_minutos && (
        <ItemMeta icone="time-outline" texto={formatarDuracao(local.duracao_minutos)} />
      )}

      {local.categoria_nome && (
        <ItemMeta icone="pricetag-outline" texto={local.categoria_nome} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.md,
    marginTop: spacing.md,
  },
});
