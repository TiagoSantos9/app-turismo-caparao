const app = require("./app");
const { PORT, HOST } = require("./config/env");

// Garante que o pool de conexões é criado (e testado) assim que o
// servidor sobe, mesmo que nenhuma rota tenha sido chamada ainda.
require("./config/db");

app.listen(PORT, HOST, () => {
  console.log(`Servidor rodando em http://${HOST}:${PORT}`);
});
