// ** React Imports
import React from "react"

// ** React Native Imports
import { View, Image, StyleSheet } from "react-native"

// ** Hook Imports
import useTheme from "../../hooks/useTheme"

// ** Component Imports
import Typography from "../@core/Typography"

const MenuItem = ({ id, name, imgPath }) => {
  // ** Hooks
  const theme = useTheme()

  // ** Styles
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      padding: 28,
      aspectRatio: 1 / 1,
      borderRadius: 15,
      backgroundColor: theme.pallete.background.main
    }
  })

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/menu-items/americano.png")} />
      <Typography color="success">{name}</Typography>
    </View>
  )
}

export default MenuItem
