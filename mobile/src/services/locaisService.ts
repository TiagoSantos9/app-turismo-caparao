import api from "./api";
import { Local } from "../types/Local";
import { Categoria, NomeCategoriaRota } from "../types/Categoria";

// Camada de serviço do frontend: centraliza TODAS as chamadas HTTP
// relacionadas a locais/categorias, já tipadas. As telas não fazem
// mais `api.get(...)` diretamente — elas chamam estas funções.
// Isso facilita, por exemplo, trocar de Axios para outra lib no futuro
// sem precisar tocar em nenhuma tela.

export async function buscarLocais(): Promise<Local[]> {
  const { data } = await api.get<Local[]>("/locais");
  return data;
}

export async function buscarLocaisPorCategoria(
  nomeRota: NomeCategoriaRota
): Promise<Local[]> {
  const { data } = await api.get<Local[]>(`/locais/${nomeRota}`);
  return data;
}

export async function buscarLocalPorId(id: string | number): Promise<Local> {
  const { data } = await api.get<Local>(`/locais/${id}`);
  return data;
}

export async function buscarCategorias(): Promise<Categoria[]> {
  const { data } = await api.get<Categoria[]>("/locais/categorias");
  return data;
}
