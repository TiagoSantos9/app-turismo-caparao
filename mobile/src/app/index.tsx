import { useMemo, useState } from "react";
import TelaGradiente from "../components/ui/TelaGradiente";
import CabecalhoApp from "../components/ui/CabecalhoApp";
import CategoriasRow from "../components/ui/CategoriasRow";
import BotaoMapa from "../components/ui/BotaoMapa";
import ListaLocais from "../components/ListaLocais";
import { useLocais } from "../hooks/useLocais";
import { buscarLocais } from "../services/locaisService";

export default function HomeScreen() {
  const { locais, carregando, erro } = useLocais(
    buscarLocais,
    "Não foi possível carregar os locais."
  );

  // Filtro de busca é só de apresentação: filtra em memória a lista
  // que o hook useLocais já buscou. Não altera useLocais nem faz
  // nenhuma chamada de API adicional.
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
        placeholderBusca="Buscar trilhas, cachoeiras..."
      />
      <CategoriasRow />
      <BotaoMapa />
      <ListaLocais
        locais={locaisFiltrados}
        carregando={carregando}
        erro={erro}
        mensagemVazio="Nenhum local encontrado."
      />
    </TelaGradiente>
  );
}
