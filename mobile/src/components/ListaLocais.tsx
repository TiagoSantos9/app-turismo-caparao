import { ScrollView, Text } from "react-native";
import { Local } from "../types/Local";
import CardLocal from "./CardLocal";
import EstadoCarregando from "./EstadoCarregando";

interface Props {
  titulo: string;
  locais: Local[];
  carregando: boolean;
  erro: string | null;
  mensagemVazio?: string;
}

// Componente compartilhado pela Home e pelas 4 telas de categoria.
// Antes esse JSX (título + lista + estados de loading/erro/vazio)
// estava copiado e colado em 5 arquivos diferentes, quase idênticos.
export default function ListaLocais({
  titulo,
  locais,
  carregando,
  erro,
  mensagemVazio = "Nenhum item encontrado.",
}: Props) {
  if (carregando) {
    return <EstadoCarregando />;
  }

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 20 }}>
        {titulo}
      </Text>

      {erro && <Text style={{ color: "red", marginBottom: 10 }}>{erro}</Text>}

      {locais.length === 0 && !erro && (
        <Text style={{ color: "#666" }}>{mensagemVazio}</Text>
      )}

      {locais.map((local) => (
        <CardLocal key={local.id} local={local} />
      ))}
    </ScrollView>
  );
}
