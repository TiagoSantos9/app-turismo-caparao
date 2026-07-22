import { FlatList, Text, StyleSheet } from "react-native";
import { Local } from "../types/Local";
import CardLocal from "./CardLocal";
import EstadoCarregando from "./EstadoCarregando";
import { colors, spacing, typography } from "../theme";

interface Props {
  locais: Local[];
  carregando: boolean;
  erro: string | null;
  mensagemVazio?: string;
}

// Componente compartilhado pela Home e pelas 4 telas de categoria — só
// renderiza a LISTA em si (título/busca/ícones ficam nas telas, que têm
// layouts diferentes entre si). Usa FlatList em vez de .map dentro de
// ScrollView: melhor desempenho com listas que podem crescer bastante.
export default function ListaLocais({
  locais,
  carregando,
  erro,
  mensagemVazio = "Nenhum item encontrado.",
}: Props) {
  if (carregando) {
    return <EstadoCarregando />;
  }

  return (
    <FlatList
      data={locais}
      keyExtractor={(item) => String(item.id)}
      renderItem={({ item }) => <CardLocal local={item} />}
      contentContainerStyle={styles.conteudo}
      ListHeaderComponent={
        erro ? <Text style={styles.erro}>{erro}</Text> : null
      }
      ListEmptyComponent={
        !erro ? <Text style={styles.vazio}>{mensagemVazio}</Text> : null
      }
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  conteudo: {
    paddingHorizontal: spacing.md,
    paddingTop: spacing.md,
    paddingBottom: spacing.xxl,
    flexGrow: 1,
  },
  erro: {
    ...typography.corpo,
    color: colors.texto.sobreGradiente,
    marginBottom: spacing.sm,
  },
  vazio: {
    ...typography.corpo,
    color: colors.texto.sobreGradienteSecundario,
  },
});
