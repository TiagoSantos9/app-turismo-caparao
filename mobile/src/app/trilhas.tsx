import ListaLocais from "../components/ListaLocais";
import { useLocais } from "../hooks/useLocais";
import { buscarLocaisPorCategoria } from "../services/locaisService";

export default function TrilhasScreen() {
  const { locais, carregando, erro } = useLocais(
    () => buscarLocaisPorCategoria("trilhas"),
    "Não foi possível carregar as trilhas."
  );

  return (
    <ListaLocais
      titulo="Trilhas"
      locais={locais}
      carregando={carregando}
      erro={erro}
      mensagemVazio="Nenhuma trilha encontrada."
    />
  );
}
