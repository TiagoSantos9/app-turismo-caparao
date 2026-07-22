import { View, ActivityIndicator, StyleSheet } from "react-native";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocais } from "../hooks/useLocais";
import { buscarLocais } from "../services/locaisService";
import CabecalhoSecao from "../components/ui/CabecalhoSecao";
import MapaTodosLocais from "../components/MapaTodosLocais";
import { colors } from "../theme";

// Tela nova (apenas de apresentação): reaproveita buscarLocais() e
// useLocais(), os mesmos já usados na Home — nenhum hook/service novo
// de dados, só um novo jeito de exibir a mesma informação.
export default function MapaScreen() {
  const { locais, carregando } = useLocais(
    buscarLocais,
    "Não foi possível carregar os locais no mapa."
  );

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.cabecalho}>
        <CabecalhoSecao titulo="Mapa" aoVoltar={() => router.back()} />
      </SafeAreaView>

      {carregando ? (
        <View style={styles.carregando}>
          <ActivityIndicator size="large" color={colors.primaria} />
        </View>
      ) : (
        <MapaTodosLocais locais={locais} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.fundo,
  },
  cabecalho: {
    backgroundColor: colors.gradiente.fim,
  },
  carregando: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
