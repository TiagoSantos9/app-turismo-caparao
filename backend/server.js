const app = require("./app");
const { PORT, HOST } = require("./config/env");


require("./config/db");

app.listen(PORT, HOST, () => {
  console.log(`Servidor rodando em http://${HOST}:${PORT}`);
});
