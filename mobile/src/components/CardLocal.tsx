import { Image, Pressable, Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Local } from "../types/Local";
import Avaliacao from "./ui/Avaliacao";
import { colors, spacing, radius, typography, shadowCard } from "../theme";

interface Props {
  local: Local;
}

export default function CardLocal({ local }: Props) {
  function abrirDetalhes() {
    // Guarda de segurança: nunca navega com um id vazio/undefined,
    // que era exatamente o que gerava a URL /locais/undefined no backend.
    if (!local?.id) {
      console.warn("CardLocal: local sem ID válido, navegação cancelada.");
      return;
    }
    router.push(`/detalhes/${local.id}`);
  }

  return (
    <Pressable onPress={abrirDetalhes} style={[styles.container, shadowCard]}>
      {local.imagem ? (
        <Image source={{ uri: local.imagem }} style={styles.imagem} resizeMode="cover" />
      ) : (
        <View style={[styles.imagem, styles.imagemPlaceholder]}>
          <Ionicons name="image-outline" size={22} color={colors.texto.secundario} />
        </View>
      )}

      <View style={styles.conteudo}>
        <Text style={styles.titulo} numberOfLines={1}>
          {local.nome}
        </Text>

        <View style={styles.linhaLocalizacao}>
          <Ionicons name="location-outline" size={13} color={colors.texto.secundario} />
          <Text style={styles.cidade} numberOfLines={1}>
            {local.cidade}
          </Text>
        </View>

        <View style={styles.rodape}>
          <Avaliacao nota={local.avaliacao} />
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.superficie,
    borderRadius: radius.lg,
    marginBottom: spacing.md,
    overflow: "hidden",
  },
  imagem: {
    width: 90,
    height: 90,
  },
  imagemPlaceholder: {
    backgroundColor: colors.superficieAlternativa,
    alignItems: "center",
    justifyContent: "center",
  },
  conteudo: {
    flex: 1,
    padding: spacing.sm + 4,
    justifyContent: "center",
    gap: 4,
  },
  titulo: {
    ...typography.corpoNegrito,
    color: colors.texto.primario,
  },
  linhaLocalizacao: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  cidade: {
    ...typography.legenda,
    color: colors.texto.secundario,
  },
  rodape: {
    marginTop: 2,
  },
});
