import { View, TextInput, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, spacing, radius, typography } from "../../theme";

interface Props {
  valor: string;
  aoMudar: (texto: string) => void;
  placeholder: string;
}

// Barra de busca em formato pílula branca, como no protótipo.
// Filtra a lista já carregada em memória (busca client-side) — não faz
// nenhuma nova chamada de API, então não altera hooks/services.
export default function CampoBusca({ valor, aoMudar, placeholder }: Props) {
  return (
    <View style={styles.container}>
      <Ionicons name="search-outline" size={18} color={colors.texto.secundario} />
      <TextInput
        value={valor}
        onChangeText={aoMudar}
        placeholder={placeholder}
        placeholderTextColor={colors.texto.secundario}
        style={styles.input}
        returnKeyType="search"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.superficie,
    borderRadius: radius.pill,
    paddingHorizontal: spacing.md,
    height: 46,
    gap: spacing.sm,
  },
  input: {
    flex: 1,
    fontSize: typography.corpo.fontSize,
    color: colors.texto.primario,
  },
});
