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
      width: "100%",
      height: 120,
      alignItems: "center",
      justifyContent: "space-between"
    },
    touchableContainer: {
      width: "46%",
      padding: 28,
      borderRadius: 15,
      backgroundColor: theme.pallete.background.main
    },
    img: {
      resizeMode: "contain"
    }
  })

  return (
    <TouchableOpacity style={styles.touchableContainer}>
      <View style={styles.container}>
        <Image source={imgSrc} style={styles.img} />
        <Typography center color="success" fontSize={17}>
          {name}
        </Typography>
      </View>
    </TouchableOpacity>
  )
}

export default MenuItem
