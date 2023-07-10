// ** React Imports
import React from "react"

// ** React Native Imports
import { Text, StyleSheet } from "react-native"

// ** Hooks Imports
import useTheme from "../../hooks/useTheme"

const Typography = ({
  fontSize = 20,
  fontWeight = "Outfit-Regular",
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
      color: color ?? theme.pallete.text.light,
      textAlign: center && "center",
      // fontWeight: title ? 500 : fontWeight,
      fontFamily: title ? "Outfit-SemiBold" : fontWeight,
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
