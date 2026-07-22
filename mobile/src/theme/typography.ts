// Não tive acesso ao Dev Mode do Figma, então não é possível confirmar
// a família tipográfica exata usada no protótipo. Uso a fonte padrão do
// sistema (San Francisco no iOS, Roboto no Android), que já tem
// aparência profissional e evita depender de carregar fontes externas.
// Se o Figma usar algo como "Poppins" ou "Inter", basta trocar
// `familia` aqui e carregar a fonte via `expo-font` — nenhuma tela
// precisa mudar.
export const typography = {
  familia: undefined as string | undefined,

  titulo1: { fontSize: 26, fontWeight: "700" as const },
  titulo2: { fontSize: 22, fontWeight: "700" as const },
  titulo3: { fontSize: 18, fontWeight: "700" as const },
  subtitulo: { fontSize: 15, fontWeight: "500" as const },
  corpo: { fontSize: 15, fontWeight: "400" as const },
  corpoNegrito: { fontSize: 15, fontWeight: "600" as const },
  legenda: { fontSize: 13, fontWeight: "400" as const },
  pequeno: { fontSize: 12, fontWeight: "500" as const },
};
