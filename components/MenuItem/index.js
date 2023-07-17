// ** React Imports
import React from "react"

// ** React Native Imports
import { View, Image, StyleSheet, TouchableOpacity } from "react-native"

// ** Hook Imports
import useTheme from "../../hooks/useTheme"
import { useNavigation } from "@react-navigation/native"

// ** Component Imports
import Typography from "../@core/Typography"

const MenuItem = ({ id, name, imgSrc }) => {
  // ** Hooks
  const theme = useTheme()
  const navigation = useNavigation()

  // ** Handlers
  const handlePress = () => {
    navigation.navigate("OrderOptionsScreen", { id, name, imgSrc })
  }

  // ** Styles
  const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: 170,
      alignItems: "center",
      width: "100%",
      justifyContent: "space-between",
      padding: 28,
      borderRadius: 15,
      backgroundColor: theme.pallete.background.main
    },
    touchableContainer: {
      width: "46%"
    },
    img: {
      resizeMode: "contain"
    }
  })

  return (
    <TouchableOpacity style={styles.touchableContainer} onPress={handlePress}>
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
