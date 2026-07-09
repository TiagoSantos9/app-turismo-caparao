// Mapa central: nome da rota (usado pelo app) -> categoria_id (usado no banco).
// Ajustado conforme os IDs reais confirmados no banco de dados do projeto.
// MELHORIA FUTURA: mover isso para uma coluna `slug` na tabela `categorias`
// (ex: "trilhas", "cachoeiras") e buscar via JOIN por nome, eliminando de vez
// a necessidade de manter este arquivo sincronizado manualmente com o banco.
module.exports = {
  trilhas: 1,
  cachoeiras: 2,
  restaurantes: 5,
  hospedagens: 6,
};
