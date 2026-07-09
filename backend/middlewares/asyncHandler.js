// Evita repetir try/catch em toda rota assíncrona. Qualquer erro
// (rejeição de Promise) lançado dentro do handler é automaticamente
// encaminhado para o middleware de erro central (errorHandler.js).
function asyncHandler(fn) {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}

module.exports = asyncHandler;
