// Tipo central do domínio "Local".
//
// `dificuldade` e `duracao_minutos` foram adicionados na migração
// 002_add_campos_detalhe_locais.sql (backend/migrations). São opcionais
// porque locais cadastrados antes da migração podem não ter esses
// valores preenchidos — a UI trata a ausência graciosamente.
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
  dificuldade?: "facil" | "moderado" | "dificil" | null;
  duracao_minutos?: number | null;
}
