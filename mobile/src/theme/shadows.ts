import { Platform } from "react-native";

// Sombra sutil usada nos cards, seguindo o padrão de apps publicados
// (elevation no Android, shadow* no iOS — React Native não unifica isso).
export const shadowCard = Platform.select({
  ios: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
  },
  android: {
    elevation: 3,
  },
  default: {},
});
