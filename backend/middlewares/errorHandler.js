// Middleware de 404: qualquer rota não mapeada cai aqui.
function notFound(req, res) {
  res.status(404).json({ mensagem: "Rota não encontrada" });
}

// Middleware de erro central: TODO erro não tratado da aplicação
// (banco de dados fora do ar, exceção inesperada, etc.) passa por aqui
// e sempre responde em um formato JSON consistente, em vez de vazar
// stack traces ou travar a requisição sem resposta.
function errorHandler(err, req, res, next) {
  console.error("Erro não tratado:", err);
  res.status(err.status || 500).json({
    mensagem: err.publicMessage || "Erro interno do servidor",
  });
}

module.exports = { notFound, errorHandler };
