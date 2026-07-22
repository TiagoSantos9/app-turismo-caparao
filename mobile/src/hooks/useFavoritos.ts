import { useCallback, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CHAVE_STORAGE = "@turismo_caparao:favoritos";

// Hook NOVO. Favoritos guardados localmente no aparelho (AsyncStorage),
// já que o app ainda não tem login/sessão de usuário implementados
// (as telas de Login/Cadastro existem no Figma mas não foram construídas
// em nenhuma etapa anterior). Quando a autenticação existir, a forma mais
// simples de evoluir isso é trocar a implementação interna deste hook
// por chamadas a um endpoint /favoritos, mantendo a mesma interface
// (favoritos, alternarFavorito, ehFavorito) — as telas não precisariam mudar.
export function useFavoritos() {
  const [favoritos, setFavoritos] = useState<number[]>([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem(CHAVE_STORAGE)
      .then((valor) => {
        if (valor) setFavoritos(JSON.parse(valor));
      })
      .catch((error) => console.log("Erro ao carregar favoritos:", error))
      .finally(() => setCarregado(true));
  }, []);

  const alternarFavorito = useCallback((localId: number) => {
    setFavoritos((atual) => {
      const jaEhFavorito = atual.includes(localId);
      const atualizado = jaEhFavorito
        ? atual.filter((id) => id !== localId)
        : [...atual, localId];

      AsyncStorage.setItem(CHAVE_STORAGE, JSON.stringify(atualizado)).catch(
        (error) => console.log("Erro ao salvar favoritos:", error)
      );

      return atualizado;
    });
  }, []);

  const ehFavorito = useCallback(
    (localId: number) => favoritos.includes(localId),
    [favoritos]
  );

  return { favoritos, carregado, alternarFavorito, ehFavorito };
}
