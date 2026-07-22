import { Stack } from "expo-router";

// Todas as telas agora desenham o próprio cabeçalho (CabecalhoApp /
// CabecalhoSecao / ImagemDestaque com seta flutuante), fiel ao Figma —
// por isso o header nativo do Stack fica desligado em todas elas
// (headerShown: false), evitando uma barra de navegação duplicada.
export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="trilhas" />
      <Stack.Screen name="cachoeiras" />
      <Stack.Screen name="restaurantes" />
      <Stack.Screen name="hospedagens" />
      <Stack.Screen name="mapa" />
      {/*
        "detalhes" é um GRUPO com layout próprio (app/detalhes/_layout.tsx).
        Continua registrado aqui apenas como grupo.
      */}
      <Stack.Screen name="detalhes" />
    </Stack>
  );
}
