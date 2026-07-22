import { Stack } from "expo-router";

// A tela [id].tsx desenha sua própria seta de voltar flutuante sobre a
// imagem (ver components/detalhe/ImagemDestaque.tsx), então o header
// nativo fica desligado aqui também.
export default function DetalhesLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="[id]" />
    </Stack>
  );
}
