const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const locaisRoutes = require("./routes/locais");
app.use("/locais", locaisRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});