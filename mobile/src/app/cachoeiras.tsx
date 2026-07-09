import ListaLocais from "../components/ListaLocais";
import { useLocais } from "../hooks/useLocais";
import { buscarLocaisPorCategoria } from "../services/locaisService";

export default function CachoeirasScreen() {
  const { locais, carregando, erro } = useLocais(
    () => buscarLocaisPorCategoria("cachoeiras"),
    "Não foi possível carregar as cachoeiras."
  );

  return (
    <ListaLocais
      titulo="Cachoeiras"
      locais={locais}
      carregando={carregando}
      erro={erro}
      mensagemVazio="Nenhuma cachoeira encontrada."
    />
  );
}
