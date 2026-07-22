// Cores extraídas diretamente do arquivo Figma (camadas de gradiente e
// fundo nomeadas com o próprio hex: "#22C1C3 -> #5B4CCB", "#EDF1F6",
// "#F4F6F9"). As demais (categorias, dificuldade, texto) foram
// aproximadas visualmente a partir dos prints, na ausência de acesso
// ao Dev Mode do Figma — ver ressalva no relatório final.
export const colors = {
  gradiente: {
    inicio: "#22C1C3",
    fim: "#5B4CCB",
  },

  fundo: "#F4F6F9",
  superficie: "#FFFFFF",
  superficieAlternativa: "#EDF1F6",

  texto: {
    primario: "#1A1A2E",
    secundario: "#6B7280",
    sobreGradiente: "#FFFFFF",
    sobreGradienteSecundario: "rgba(255,255,255,0.85)",
  },

  primaria: "#22C1C3",
  secundaria: "#5B4CCB",
  perigo: "#EF4444",
  avaliacao: "#F5A623",

  categorias: {
    trilhas: "#22C55E",
    cachoeiras: "#0EA5E9",
    restaurantes: "#F97316",
    hospedagens: "#78716C",
  },

  dificuldade: {
    facil: "#22C55E",
    moderado: "#F59E0B",
    dificil: "#EF4444",
  },

  borda: "#E5E7EB",
};
