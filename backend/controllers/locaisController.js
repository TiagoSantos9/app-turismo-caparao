// Camada HTTP (controllers): interpreta req/res e delega toda a lógica
// de dados para o service. O controller não sabe escrever SQL.
const locaisService = require("../services/locaisService");

async function listarTodos(req, res) {
  const { categoria_id: categoriaId } = req.query;
  const locais = await locaisService.listar({ categoriaId });
  res.json(locais);
}

async function buscarPorId(req, res) {
  const { id } = req.params;

  if (!id || isNaN(Number(id))) {
    return res.status(400).json({ mensagem: "ID inválido" });
  }

  const local = await locaisService.buscarPorId(id);

  if (!local) {
    return res.status(404).json({ mensagem: "Local não encontrado" });
  }

  res.json(local);
}

async function listarCategorias(req, res) {
  const categorias = await locaisService.listarCategorias();
  res.json(categorias);
}

module.exports = { listarTodos, buscarPorId, listarCategorias };
