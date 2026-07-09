import ListaLocais from "../components/ListaLocais";
import { useLocais } from "../hooks/useLocais";
import { buscarLocaisPorCategoria } from "../services/locaisService";

export default function RestaurantesScreen() {
  const { locais, carregando, erro } = useLocais(
    () => buscarLocaisPorCategoria("restaurantes"),
    "Não foi possível carregar os restaurantes."
  );

  return (
    <ListaLocais
      titulo="Restaurantes"
      locais={locais}
      carregando={carregando}
      erro={erro}
      mensagemVazio="Nenhum restaurante encontrado."
    />
  );
}
