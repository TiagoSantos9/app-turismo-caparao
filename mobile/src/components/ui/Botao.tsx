import { Pressable, Text, StyleSheet, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { colors, spacing, radius, typography } from "../../theme";

interface Props {
  texto: string;
  aoPressionar: () => void;
  variante?: "preenchido" | "contorno";
  icone?: keyof typeof Ionicons.glyphMap;
  carregando?: boolean;
  flex?: boolean;
}

// Botão genérico com duas variantes (preenchido / contorno), cobrindo
// "Ver rota" e "Salvar" na tela de detalhes, e reutilizável em qualquer
// outra tela futura.
export default function Botao({
  texto,
  aoPressionar,
  variante = "preenchido",
  icone,
  carregando = false,
  flex = false,
}: Props) {
  const preenchido = variante === "preenchido";

  return (
    <Pressable
      onPress={aoPressionar}
      disabled={carregando}
      style={[
        styles.base,
        preenchido ? styles.preenchido : styles.contorno,
        flex && styles.flex,
      ]}
    >
      {carregando ? (
        <ActivityIndicator
          size="small"
          color={preenchido ? colors.superficie : colors.primaria}
        />
      ) : (
        <>
          {icone && (
            <Ionicons
              name={icone}
              size={16}
              color={preenchido ? colors.superficie : colors.primaria}
            />
          )}
          <Text style={[styles.texto, preenchido ? styles.textoPreenchido : styles.textoContorno]}>
            {texto}
          </Text>
        </>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing.xs,
    paddingVertical: spacing.sm + 2,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.pill,
  },
  flex: {
    flex: 1,
  },
  preenchido: {
    backgroundColor: colors.primaria,
  },
  contorno: {
    backgroundColor: "transparent",
    borderWidth: 1.5,
    borderColor: colors.primaria,
  },
  texto: {
    ...typography.corpoNegrito,
  },
  textoPreenchido: {
    color: colors.superficie,
  },
  textoContorno: {
    color: colors.primaria,
  },
});
