import ListaLocais from "../components/ListaLocais";
import { useLocais } from "../hooks/useLocais";
import { buscarLocais } from "../services/locaisService";

export default function HomeScreen() {
  const { locais, carregando, erro } = useLocais(
    buscarLocais,
    "Não foi possível carregar os locais."
  );

  return (
    <ListaLocais
      titulo="Turismo Caparaó"
      locais={locais}
      carregando={carregando}
      erro={erro}
      mensagemVazio="Nenhum local encontrado."
    />
  );
}
