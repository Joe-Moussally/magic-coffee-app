// ** React Imports
import React from "react"

// ** React Native Imports
import { View, Image, StyleSheet, TouchableOpacity } from "react-native"

// ** Hook Imports
import useTheme from "../../hooks/useTheme"

// ** Component Imports
import Typography from "../@core/Typography"

const MenuItem = ({ id, name, imgSrc }) => {
  // ** Hooks
  const theme = useTheme()

  // ** Styles
  const styles = StyleSheet.create({
    container: {
      width: "45%",
      padding: 28,
      aspectRatio: 1 / 1,
      borderRadius: 15,
      backgroundColor: theme.pallete.background.main,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 10
    }
  })

  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Image source={imgSrc} />
        <Typography center color="success">
          {name}
        </Typography>
      </View>
    </TouchableOpacity>
  )
}

export default MenuItem
