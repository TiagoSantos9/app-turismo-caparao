import { useEffect, useState } from "react";
import { Local } from "../types/Local";
import { buscarLocalPorId } from "../services/locaisService";

interface ResultadoUseLocalDetalhe {
  local: Local | null;
  carregando: boolean;
  erro: string | null;
}

// Hook dedicado à tela de detalhes. Mantém a mesma guarda de segurança
// que corrigiu o bug original (id ausente = mensagem clara, nunca
// dispara /locais/undefined) e reage a mudanças de id.
export function useLocalDetalhe(
  id: string | undefined
): ResultadoUseLocalDetalhe {
  const [local, setLocal] = useState<Local | null>(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setErro("ID do local não foi informado na navegação.");
      setCarregando(false);
      return;
    }

    let ativo = true;

    async function carregar() {
      setCarregando(true);
      setErro(null);
      try {
        const dados = await buscarLocalPorId(id);
        if (ativo) setLocal(dados);
      } catch (error) {
        console.log("Erro ao buscar local:", error);
        if (ativo) setErro("Não foi possível carregar este local.");
      } finally {
        if (ativo) setCarregando(false);
      }
    }

    carregar();

    return () => {
      ativo = false;
    };
  }, [id]);

  return { local, carregando, erro };
}
