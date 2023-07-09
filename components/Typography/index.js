// ** React Imports
import React from "react"

// ** React Native Imports
import { Text, StyleSheet } from "react-native"

// ** Hooks Imports
import useTheme from "../../hooks/useTheme"

const Typography = ({
  fontSize = 20,
  center,
  color,
  horizontalSpacing,
  verticalSpacing,
  children,
  style = {},
  rest
}) => {
  // ** Hooks
  const theme = useTheme()

  const styles = StyleSheet.create({
    text: {
      fontSize,
      color: color ?? theme.pallete.text.light,
      textAlign: center && "center",
      fontWeight: 200,
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
