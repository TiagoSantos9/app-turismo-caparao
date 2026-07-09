export interface Categoria {
  id: number;
  nome: string;
}

// Nomes de rota válidos para filtro por categoria (usados tanto no
// serviço de API quanto nas telas). Manter isso como um union type
// evita erros de digitação silenciosos, como "trilha" no lugar de "trilhas".
export type NomeCategoriaRota =
  | "trilhas"
  | "cachoeiras"
  | "restaurantes"
  | "hospedagens";
