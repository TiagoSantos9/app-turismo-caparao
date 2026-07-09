// Tipo central do domínio "Local". Antes essa mesma interface estava
// copiada e colada em 6 arquivos diferentes (index, trilhas, cachoeiras,
// restaurantes, hospedagens, CardLocal, detalhes/[id]) — se um campo
// mudasse no banco, seria preciso lembrar de editar todos eles.
export interface Local {
  id: number;
  nome: string;
  cidade: string;
  descricao: string;
  avaliacao: number;
  imagem: string;
  latitude: number | string;
  longitude: number | string;
  categoria_id?: number;
  categoria_nome?: string;
}
