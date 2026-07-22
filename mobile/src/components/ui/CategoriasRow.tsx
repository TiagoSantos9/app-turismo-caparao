import { View, StyleSheet } from "react-native";
import { router } from "expo-router";
import CategoriaIconeBotao from "./CategoriaIconeBotao";
import { colors, spacing } from "../../theme";

// Fileira com os 4 ícones de categoria da Home. A navegação reaproveita
// as rotas já existentes (/trilhas, /cachoeiras, ...) — nenhuma rota nova.
export default function CategoriasRow() {
  return (
    <View style={styles.container}>
      <CategoriaIconeBotao
        rotulo="Trilhas"
        icone="trail-sign-outline"
        cor={colors.categorias.trilhas}
        aoPressionar={() => router.push("/trilhas")}
      />
      <CategoriaIconeBotao
        rotulo="Cachoeiras"
        icone="water-outline"
        cor={colors.categorias.cachoeiras}
        aoPressionar={() => router.push("/cachoeiras")}
      />
      <CategoriaIconeBotao
        rotulo="Restaurantes"
        icone="restaurant-outline"
        cor={colors.categorias.restaurantes}
        aoPressionar={() => router.push("/restaurantes")}
      />
      <CategoriaIconeBotao
        rotulo="Hospedagens"
        icone="home-outline"
        cor={colors.categorias.hospedagens}
        aoPressionar={() => router.push("/hospedagens")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: spacing.md,
    marginTop: spacing.lg,
  },
});
