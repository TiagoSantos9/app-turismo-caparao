// Cálculo de distância em linha reta entre duas coordenadas (fórmula de
// Haversine). Isso NUNCA fica salvo no banco — é sempre relativo à
// posição atual de quem está usando o app, então precisa ser calculado
// em tempo real no dispositivo, não no backend.
export function calcularDistanciaKm(
  latA: number,
  lonA: number,
  latB: number,
  lonB: number
): number {
  const R = 6371; // raio médio da Terra em km
  const dLat = paraRadianos(latB - latA);
  const dLon = paraRadianos(lonB - lonA);

  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(paraRadianos(latA)) *
      Math.cos(paraRadianos(latB)) *
      Math.sin(dLon / 2) ** 2;

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c;
}

function paraRadianos(graus: number): number {
  return (graus * Math.PI) / 180;
}

export function formatarDistancia(km: number): string {
  if (km < 1) {
    return `${Math.round(km * 1000)} m`;
  }
  return `${km.toFixed(1)} km`;
}

export function formatarDuracao(minutos: number): string {
  const horas = Math.floor(minutos / 60);
  const min = minutos % 60;

  if (horas === 0) {
    return `${min}min`;
  }
  if (min === 0) {
    return `${horas}h`;
  }
  return `${horas}h${min}`;
}

export const ROTULO_DIFICULDADE: Record<string, string> = {
  facil: "Fácil",
  moderado: "Moderado",
  dificil: "Difícil",
};
