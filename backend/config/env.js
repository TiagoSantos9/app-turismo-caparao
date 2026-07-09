require("dotenv").config();


const obrigatorias = ["DB_HOST", "DB_USER", "DB_NAME"];
const faltando = obrigatorias.filter((chave) => !process.env[chave]);

if (faltando.length > 0) {
  console.error(
    `Erro de configuração: variáveis de ambiente ausentes no .env -> ${faltando.join(", ")}`
  );
  process.exit(1);
}

module.exports = {
  DB_HOST: process.env.DB_HOST,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD || "",
  DB_NAME: process.env.DB_NAME,
  PORT: process.env.PORT || 3000,
  HOST: process.env.HOST || "0.0.0.0",
};
