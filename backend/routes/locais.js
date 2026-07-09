const express = require("express");
const router = express.Router();

const { listarTodos, buscarPorId, listarCategorias } = require("../controllers/locaisController");
const CATEGORIAS = require("../config/categorias");



router.get("/categorias", listarCategorias);


router.get("/", listarTodos);

Object.entries(CATEGORIAS).forEach(([nomeRota, categoriaId]) => {
  router.get(`/${nomeRota}`, (req, res) => {
    req.query.categoria_id = categoriaId;
    listarTodos(req, res);
  });
});


router.get("/:id", buscarPorId);

module.exports = router;
