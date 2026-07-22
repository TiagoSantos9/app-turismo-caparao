import { ScrollView, Text, Pressable, StyleSheet } from "react-native";
import { router } from "expo-router";
import { Local } from "../types/Local";
import { colors, spacing, radius, typography } from "../theme";

interface Props {
  locais: Local[];
}

// react-native-maps não roda em web (ver MapaLocal.web.tsx). Aqui, em vez
// do mapa, mostramos a lista de locais com link para abrir cada um no
// Google Maps — mesma solução usada na tela de detalhes.
export default function MapaTodosLocais({ locais }: Props) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {locais.map((local) => (
        <Pressable
          key={local.id}
          style={styles.item}
          onPress={() => router.push(`/detalhes/${local.id}`)}
        >
          <Text style={styles.nome}>{local.nome}</Text>
          <Text style={styles.cidade}>{local.cidade}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
  },
  item: {
    backgroundColor: colors.superficie,
    borderRadius: radius.md,
    padding: spacing.md,
    marginBottom: spacing.sm,
  },
  nome: {
    ...typography.corpoNegrito,
    color: colors.texto.primario,
  },
  cidade: {
    ...typography.legenda,
    color: colors.texto.secundario,
    marginTop: 2,
  },
});
