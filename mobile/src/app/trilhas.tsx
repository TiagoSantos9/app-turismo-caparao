import { useMemo, useState } from "react";
import { router } from "expo-router";
import TelaGradiente from "../components/ui/TelaGradiente";
import CabecalhoApp from "../components/ui/CabecalhoApp";
import CabecalhoSecao from "../components/ui/CabecalhoSecao";
import ListaLocais from "../components/ListaLocais";
import { useLocais } from "../hooks/useLocais";
import { buscarLocaisPorCategoria } from "../services/locaisService";

export default function TrilhasScreen() {
  const { locais, carregando, erro } = useLocais(
    () => buscarLocaisPorCategoria("trilhas"),
    "Não foi possível carregar as trilhas."
  );

  // Filtro de busca client-side, igual à Home — não altera hooks/services.
  const [busca, setBusca] = useState("");
  const locaisFiltrados = useMemo(() => {
    if (!busca.trim()) return locais;
    const termo = busca.trim().toLowerCase();
    return locais.filter(
      (local) =>
        local.nome.toLowerCase().includes(termo) ||
        local.cidade.toLowerCase().includes(termo)
    );
  }, [locais, busca]);

  return (
    <TelaGradiente>
      <CabecalhoApp
        busca={busca}
        aoMudarBusca={setBusca}
        placeholderBusca="Buscar trilhas..."
      />
      <CabecalhoSecao titulo="Trilhas" aoVoltar={() => router.back()} />
      <ListaLocais
        locais={locaisFiltrados}
        carregando={carregando}
        erro={erro}
        mensagemVazio="Nenhuma trilha encontrada."
      />
    </TelaGradiente>
  );
}
