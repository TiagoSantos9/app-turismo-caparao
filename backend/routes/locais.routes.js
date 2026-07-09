const express = require("express");
const router = express.Router();

const asyncHandler = require("../middlewares/asyncHandler");
const controller = require("../controllers/locaisController");
const CATEGORIAS = require("../constants/categorias");

// ORDEM IMPORTA: rotas literais (ex: /trilhas, /categorias) precisam vir
// ANTES da rota dinâmica /:id. Se /:id vier primeiro, o Express entende
// "trilhas" como se fosse um ID e a rota específica nunca é alcançada.

// GET /locais/categorias -> lista as categorias cadastradas no banco
router.get("/categorias", asyncHandler(controller.listarCategorias));

// GET /locais -> lista todos (aceita ?categoria_id=2)
router.get("/", asyncHandler(controller.listarTodos));

// Gera automaticamente /locais/trilhas, /locais/cachoeiras,
// /locais/restaurantes, /locais/hospedagens a partir de constants/categorias.js
Object.entries(CATEGORIAS).forEach(([nomeRota, categoriaId]) => {
  router.get(
    `/${nomeRota}`,
    asyncHandler(async (req, res) => {
      req.query.categoria_id = categoriaId;
      await controller.listarTodos(req, res);
    })
  );
});

// GET /locais/:id -> detalhes de um local específico (fica por último)
router.get("/:id", asyncHandler(controller.buscarPorId));

module.exports = router;
