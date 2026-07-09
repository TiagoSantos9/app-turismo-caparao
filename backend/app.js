const express = require("express");
const cors = require("cors");

const locaisRoutes = require("./routes/locais.routes");
const { notFound, errorHandler } = require("./middlewares/errorHandler");

// Separar a configuração do Express (app.js) do início do servidor
// (server.js) é uma prática comum e útil para testes automatizados:
// no futuro, um teste com supertest pode importar `app` sem precisar
// abrir uma porta de rede de verdade.
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ status: "ok", mensagem: "API Turismo Caparaó no ar" });
});

app.use("/locais", locaisRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
