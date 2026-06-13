const express = require("express");
const router = express.Router();
const db = require("../db");

// GET todos locais
router.get("/", (req, res) => {
  db.query("SELECT * FROM locais", (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
});

module.exports = router;

router.get("/trilhas", (req, res) => {
  db.query(
    "SELECT * FROM locais WHERE categoria_id = 1",
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json(result);
    }
  );
});

router.get("/cachoeiras", (req, res) => {
  db.query(
    "SELECT * FROM locais WHERE categoria_id = 2",
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json(result);
    }
  );
});

router.get("/restaurantes", (req, res) => {
  db.query(
    "SELECT * FROM locais WHERE categoria_id = 3",
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json(result);
    }
  );
});

router.get("/hospedagens", (req, res) => {
  db.query(
    "SELECT * FROM locais WHERE categoria_id = 4",
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json(result);
    }
  );
});