// Usamos mysql2/promise (em vez do driver por callback) para permitir
// async/await nos services e controllers, o que deixa o tratamento de
// erros centralizado e muito mais legível.
const mysql = require("mysql2/promise");
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = require("./env");

const pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

async function testarConexao() {
  try {
    const connection = await pool.getConnection();
    console.log("MySQL conectado com sucesso (pool ativo)");
    connection.release();
  } catch (err) {
    console.error("Erro ao conectar ao MySQL:", err.message);
  }
}

testarConexao();

module.exports = pool;
