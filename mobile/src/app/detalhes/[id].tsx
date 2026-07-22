import { ScrollView, Text, View, StyleSheet, Linking, Platform } from "react-native";
import { useLocalSearchParams, router } from "expo-router";
import { useMemo } from "react";
import { useLocalDetalhe } from "../../hooks/useLocalDetalhe";
import { useLocalizacaoAtual } from "../../hooks/useLocalizacaoAtual";
import { useFavoritos } from "../../hooks/useFavoritos";
import EstadoCarregando from "../../components/EstadoCarregando";
import EstadoErro from "../../components/EstadoErro";
import MapaLocal from "../../components/MapaLocal";
import ImagemDestaque from "../../components/detalhe/ImagemDestaque";
import AcoesDetalhe from "../../components/detalhe/AcoesDetalhe";
import MetaInfoDetalhe from "../../components/detalhe/MetaInfoDetalhe";
import Avaliacao from "../../components/ui/Avaliacao";
import { colors, spacing, typography } from "../../theme";
import { calcularDistanciaKm } from "../../utils/distancia";

export default function Detalhes() {
  // useLocalSearchParams pode retornar string | string[] | undefined.
  // Tratamos os três casos explicitamente em vez de assumir que sempre
  // vem uma string (foi aqui que o bug original "ID recebido: undefined"
  // acontecia, antes de existir o app/detalhes/_layout.tsx).
  const params = useLocalSearchParams<{ id?: string | string[] }>();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const { local, carregando, erro } = useLocalDetalhe(id);
  const { coordenadas } = useLocalizacaoAtual(true);
  const { ehFavorito, alternarFavorito } = useFavoritos();

  const latitude = local ? Number(local.latitude) : NaN;
  const longitude = local ? Number(local.longitude) : NaN;
  const coordenadasValidas = !isNaN(latitude) && !isNaN(longitude);

  const distanciaKm = useMemo(() => {
    if (!coordenadas || !coordenadasValidas) return null;
    return calcularDistanciaKm(
      coordenadas.latitude,
      coordenadas.longitude,
      latitude,
      longitude
    );
  }, [coordenadas, latitude, longitude, coordenadasValidas]);

  if (carregando) {
    return <EstadoCarregando mensagem="Carregando..." />;
  }

  if (erro || !local) {
    return <EstadoErro mensagem={erro ?? "Local não encontrado."} />;
  }

  function abrirRota() {
    if (!coordenadasValidas) return;
    const url = Platform.select({
      ios: `maps://app?daddr=${latitude},${longitude}`,
      android: `google.navigation:q=${latitude},${longitude}`,
      default: `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`,
    });
    Linking.openURL(url!).catch(() => {
      Linking.openURL(
        `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`
      );
    });
  }

  return (
    <View style={styles.tela}>
      <ScrollView bounces={false}>
        <ImagemDestaque uri={local.imagem} aoVoltar={() => router.back()} />

        <View style={styles.conteudo}>
          <View style={styles.linhaTitulo}>
            <Text style={styles.titulo}>{local.nome}</Text>
            <Avaliacao nota={local.avaliacao} tamanho={16} />
          </View>

          <Text style={styles.cidade}>{local.cidade}</Text>

          <AcoesDetalhe
            aoVerRota={abrirRota}
            aoSalvar={() => alternarFavorito(local.id)}
            salvo={ehFavorito(local.id)}
          />

          <MetaInfoDetalhe local={local} distanciaKm={distanciaKm} />

          <Text style={styles.descricao}>{local.descricao}</Text>

          {coordenadasValidas ? (
            <View style={styles.mapaContainer}>
              <MapaLocal
                latitude={latitude}
                longitude={longitude}
                titulo={local.nome}
                descricao={local.descricao}
              />
            </View>
          ) : (
            <Text style={styles.semMapa}>Localização não disponível no mapa.</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: colors.superficie,
  },
  conteudo: {
    padding: spacing.lg,
  },
  linhaTitulo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: spacing.sm,
  },
  titulo: {
    ...typography.titulo1,
    color: colors.texto.primario,
    flex: 1,
  },
  cidade: {
    ...typography.corpo,
    color: colors.texto.secundario,
    marginTop: 4,
  },
  descricao: {
    ...typography.corpo,
    color: colors.texto.primario,
    lineHeight: 24,
    marginTop: spacing.lg,
  },
  mapaContainer: {
    marginTop: spacing.lg,
  },
  semMapa: {
    ...typography.legenda,
    color: colors.texto.secundario,
    marginTop: spacing.lg,
  },
});
