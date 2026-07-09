const db = require("../config/db");

// Camada de acesso a dados (services): só fala SQL, não conhece Express
// (não recebe req/res). Isso permite reaproveitar essas funções em outros
// contextos no futuro (ex: um job agendado, um teste automatizado, um
// CLI de administração) sem depender de HTTP.

async function listar({ categoriaId } = {}) {
  let sql = `
    SELECT locais.*, categorias.nome AS categoria_nome
    FROM locais
    LEFT JOIN categorias ON locais.categoria_id = categorias.id
  `;
  const params = [];

  if (categoriaId) {
    sql += " WHERE locais.categoria_id = ?";
    params.push(categoriaId);
  }

  sql += " ORDER BY locais.id";

  const [linhas] = await db.query(sql, params);
  return linhas;
}

async function buscarPorId(id) {
  const sql = `
    SELECT locais.*, categorias.nome AS categoria_nome
    FROM locais
    LEFT JOIN categorias ON locais.categoria_id = categorias.id
    WHERE locais.id = ?
  `;

  const [linhas] = await db.query(sql, [id]);
  return linhas[0] || null;
}

async function listarCategorias() {
  const [linhas] = await db.query("SELECT * FROM categorias ORDER BY nome");
  return linhas;
}

module.exports = { listar, buscarPorId, listarCategorias };
