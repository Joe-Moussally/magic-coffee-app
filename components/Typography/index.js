import { View, Text, StyleSheet } from "react-native"
import React from "react"

const Typography = ({
  fontSize = 20,
  color = "#181D2D",
  center,
  horizontalSpacing,
  verticalSpacing,
  children,
  style = {},
  rest
}) => {
  const styles = StyleSheet.create({
    text: {
      fontSize,
      color,
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
