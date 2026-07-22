import { useEffect, useState } from "react";
import * as Location from "expo-location";

interface Coordenadas {
  latitude: number;
  longitude: number;
}

interface ResultadoLocalizacao {
  coordenadas: Coordenadas | null;
  permissaoNegada: boolean;
  carregando: boolean;
}

// Hook NOVO (não altera useLocais/useLocalDetalhe existentes).
// Pede permissão de localização e devolve a posição atual do usuário,
// usada só para calcular a distância até o local exibido em detalhes.
// Se a permissão for negada, o app continua funcionando normalmente —
// a UI simplesmente não mostra a distância (ver MetaInfoDetalhe.tsx).
export function useLocalizacaoAtual(ativo: boolean): ResultadoLocalizacao {
  const [coordenadas, setCoordenadas] = useState<Coordenadas | null>(null);
  const [permissaoNegada, setPermissaoNegada] = useState(false);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    if (!ativo) {
      setCarregando(false);
      return;
    }

    let cancelado = false;

    async function obterLocalizacao() {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== "granted") {
          if (!cancelado) setPermissaoNegada(true);
          return;
        }

        const posicao = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.Balanced,
        });

        if (!cancelado) {
          setCoordenadas({
            latitude: posicao.coords.latitude,
            longitude: posicao.coords.longitude,
          });
        }
      } catch (error) {
        console.log("Não foi possível obter a localização:", error);
        if (!cancelado) setPermissaoNegada(true);
      } finally {
        if (!cancelado) setCarregando(false);
      }
    }

    obterLocalizacao();

    return () => {
      cancelado = true;
    };
  }, [ativo]);

  return { coordenadas, permissaoNegada, carregando };
}
