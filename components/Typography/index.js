// ** React Imports
import React from "react"

// ** React Native Imports
import { Text, StyleSheet } from "react-native"

// ** Hooks Imports
import useTheme from "../../hooks/useTheme"

const Typography = ({
  fontSize = 20,
  fontWeight = 200,
  center,
  color,
  horizontalSpacing,
  verticalSpacing,
  children,
  title,
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
      fontWeight: title ? 500 : fontWeight,
      title,
      marginTop: verticalSpacing,
      marginBottom: verticalSpacing,
      marginLeft: horizontalSpacing,
      marginRight: horizontalSpacing,
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
