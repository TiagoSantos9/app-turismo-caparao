import ListaLocais from "../components/ListaLocais";
import { useLocais } from "../hooks/useLocais";
import { buscarLocaisPorCategoria } from "../services/locaisService";

export default function HospedagensScreen() {
  const { locais, carregando, erro } = useLocais(
    () => buscarLocaisPorCategoria("hospedagens"),
    "Não foi possível carregar as hospedagens."
  );

  return (
    <ListaLocais
      titulo="Hospedagens"
      locais={locais}
      carregando={carregando}
      erro={erro}
      mensagemVazio="Nenhuma hospedagem encontrada."
    />
  );
}
