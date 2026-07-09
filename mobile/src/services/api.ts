import axios from "axios";

// EXPO_PUBLIC_API_URL é lido do arquivo mobile/.env (variáveis com
// prefixo EXPO_PUBLIC_ são embutidas automaticamente pelo Expo SDK 49+).
// Isso evita ter que editar código toda vez que o IP do backend mudar
// na rede local — basta editar o .env e reiniciar o `expo start`.
const API_URL = process.env.EXPO_PUBLIC_API_URL ?? "http://10.0.0.13:3000";

const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log(
      "Erro na requisição:",
      error?.response?.status,
      error?.config?.url
    );
    return Promise.reject(error);
  }
);

export default api;
