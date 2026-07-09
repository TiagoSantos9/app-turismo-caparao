import { Stack } from "expo-router";

export default function DetalhesLayout() {
  return (
    <Stack>
      <Stack.Screen name="[id]" options={{ title: "Detalhes" }} />
    </Stack>
  );
}
