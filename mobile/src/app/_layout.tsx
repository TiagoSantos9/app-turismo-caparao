import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Turismo Caparaó" }} />
      <Stack.Screen name="trilhas" options={{ title: "Trilhas" }} />
      <Stack.Screen name="cachoeiras" options={{ title: "Cachoeiras" }} />
      <Stack.Screen name="restaurantes" options={{ title: "Restaurantes" }} />
      <Stack.Screen name="hospedagens" options={{ title: "Hospedagens" }} />
   
      <Stack.Screen name="detalhes" options={{ headerShown: false }} />
    </Stack>
  );
}
