// ** React Imports
import React from "react"

// ** React Native Imports
import { Text, StyleSheet } from "react-native"

// ** Hooks Imports
import useTheme from "../../hooks/useTheme"

const Typography = ({
  fontSize = 20,
  fontWeight = 400,
  center,
  color,
  horizontalSpacing,
  verticalSpacing,
  children,
  title = false,
  style = {},
  rest
}) => {
  // ** Hooks
  const theme = useTheme()

  const styles = StyleSheet.create({
    text: {
      fontSize: title ? 37 : fontSize,
      color:
        color === "primary"
          ? theme.pallete.primary.main
          : color === "secondary"
          ? theme.pallete.secondary.main
          : color === "error"
          ? theme.pallete.error.main
          : color === "warning"
          ? theme.pallete.warning.main
          : color === "info"
          ? theme.pallete.info.main
          : color === "gray"
          ? theme.pallete.gray.main
          : theme.pallete.text.main,
      textAlign: center && "center",
      fontFamily: title
        ? "Outfit_600SemiBold"
        : fontWeight === 100
        ? "Outfit_100Thin"
        : fontWeight === 200
        ? "Outfit_200ExtraLight"
        : fontWeight === 300
        ? "Outfit_300Light"
        : fontWeight === 400
        ? "Outfit_400Regular"
        : fontWeight === 500
        ? "Outfit_500Medium"
        : fontWeight === 600
        ? "Outfit_600SemiBold"
        : fontWeight === 700
        ? "Outfit_700Bold"
        : fontWeight === 800
        ? "Outfit_800ExtraBold"
        : fontWeight === 900
        ? "Outfit_900Black"
        : "Outfit_400Regular",
      marginTop: verticalSpacing,
      marginBottom: verticalSpacing,
      marginLeft: horizontalSpacing,
      marginRight: horizontalSpacing,
      // fontFamily: "Outfit",
      ...style
    }
  })

  return (
    <Text style={styles.text} {...rest}>
      {children}
    </Text>
  )
}

export default Typography
