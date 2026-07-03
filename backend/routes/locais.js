const express = require("express");
const router = express.Router();
const db = require("../db");

// GET todos os locais
router.get("/", (req, res) => {
  db.query("SELECT * FROM locais", (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
});

// GET um local pelo ID
router.get("/:id", (req, res) => {
  const { id } = req.params;

  db.query(
    "SELECT * FROM locais WHERE id = ?",
    [id],
    (err, result) => {
      if (err) return res.status(500).send(err);

      if (result.length === 0) {
        return res.status(404).json({
          mensagem: "Local não encontrado",
        });
      }

      res.json(result[0]);
    }
  );
});

// GET trilhas
router.get("/trilhas", (req, res) => {
  db.query(
    "SELECT * FROM locais WHERE categoria_id = 1",
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json(result);
    }
  );
});

// GET cachoeiras
router.get("/cachoeiras", (req, res) => {
  db.query(
    "SELECT * FROM locais WHERE categoria_id = 2",
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json(result);
    }
  );
});

// GET restaurantes
router.get("/restaurantes", (req, res) => {
  db.query(
    "SELECT * FROM locais WHERE categoria_id = 3",
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json(result);
    }
  );
});

// GET hospedagens
router.get("/hospedagens", (req, res) => {
  db.query(
    "SELECT * FROM locais WHERE categoria_id = 4",
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json(result);
    }
  );
});

module.exports = router;