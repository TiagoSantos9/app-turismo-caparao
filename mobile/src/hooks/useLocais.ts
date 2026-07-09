import { useCallback, useEffect, useState } from "react";
import { Local } from "../types/Local";

type Buscador = () => Promise<Local[]>;

interface ResultadoUseLocais {
  locais: Local[];
  carregando: boolean;
  erro: string | null;
  recarregar: () => void;
}

// Hook genérico: recebe QUALQUER função que busca uma lista de locais
// (todos, ou filtrados por categoria) e cuida de loading/erro/estado.
// Isso é o que elimina a duplicação que existia entre index.tsx,
// trilhas.tsx, cachoeiras.tsx, restaurantes.tsx e hospedagens.tsx —
// cada uma tinha os mesmos três useState e o mesmo useEffect copiados.
export function useLocais(
  buscador: Buscador,
  mensagemErro: string
): ResultadoUseLocais {
  const [locais, setLocais] = useState<Local[]>([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState<string | null>(null);
  const [tentativa, setTentativa] = useState(0);

  const recarregar = useCallback(() => setTentativa((t) => t + 1), []);

  useEffect(() => {
    let ativo = true;

    async function carregar() {
      setCarregando(true);
      setErro(null);
      try {
        const dados = await buscador();
        if (ativo) setLocais(dados);
      } catch (error) {
        console.log(mensagemErro, error);
        if (ativo) setErro(mensagemErro);
      } finally {
        if (ativo) setCarregando(false);
      }
    }

    carregar();

    return () => {
      ativo = false;
    };
    // "buscador" normalmente é recriado a cada render (arrow function
    // inline na tela). Rastreamos apenas "tentativa" de propósito, para
    // não entrar em loop infinito; use `recarregar()` para forçar um novo fetch.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tentativa]);

  return { locais, carregando, erro, recarregar };
}
