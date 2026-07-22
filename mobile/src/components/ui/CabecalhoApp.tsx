import { View, Text, StyleSheet } from "react-native";
import CampoBusca from "./CampoBusca";
import { colors, spacing, typography } from "../../theme";

interface Props {
  busca: string;
  aoMudarBusca: (texto: string) => void;
  placeholderBusca: string;
  nomeUsuario?: string;
}

// Cabeçalho repetido em TODAS as telas do protótipo: saudação + busca.
// Fica sobre o gradiente de TelaGradiente.
export default function CabecalhoApp({
  busca,
  aoMudarBusca,
  placeholderBusca,
  nomeUsuario = "Tiago",
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.saudacao}>Olá, {nomeUsuario} 👋</Text>
      <Text style={styles.subtitulo}>Descubra o Caparaó</Text>

      <View style={styles.espacoBusca}>
        <CampoBusca
          valor={busca}
          aoMudar={aoMudarBusca}
          placeholder={placeholderBusca}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.md,
    paddingTop: spacing.sm,
  },
  saudacao: {
    ...typography.titulo2,
    color: colors.texto.sobreGradiente,
  },
  subtitulo: {
    ...typography.subtitulo,
    color: colors.texto.sobreGradienteSecundario,
    marginTop: 2,
  },
  espacoBusca: {
    marginTop: spacing.md,
  },
});
