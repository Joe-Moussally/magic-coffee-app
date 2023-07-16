// ** React Imports
import React from "react"

// ** React Native Imports
import { View, Text, StyleSheet } from "react-native"

// ** Navigation Imports
import { useNavigation } from "@react-navigation/native"

// ** Icons Imports
import { Feather } from "@expo/vector-icons"
import { Octicons } from "@expo/vector-icons"
import { MaterialCommunityIcons } from "@expo/vector-icons"

// ** Hooks Imports
import useTheme from "../../../hooks/useTheme"

// ** Component Imports
import Button from "../../../components/Button"
import Typography from "../../../components/Typography"

const MenuScreen = () => {
  // ** Hooks
  const theme = useTheme()
  const navigation = useNavigation()

  // ** Styles
  const styles = StyleSheet.create({
    screenContainer: {
      flex: 1,
      backgroundColor: theme.pallete.background.main
    },
    headerContainer: {
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
      paddingHorizontal: 16,
      marginBottom: 16
    },
    headerLeft: {
      gap: 6
    },
    headerRight: {
      flexDirection: "row",
      alignItems: "center"
    }
  })
  return (
    <View style={styles.screenContainer}>
      {/* Header */}
      <View style={styles.headerContainer}>
        {/* Header Left */}
        <View style={styles.headerLeft}>
          <Typography fontSize={21} color="gray">
            Welcome!
          </Typography>
          <Typography fontSize={27}>Joe</Typography>
        </View>

        {/* Header Right */}
        <View style={styles.headerRight}>
          <Button
            iconButton
            icon={<Feather name="shopping-cart" size={30} />}
            variant="blank"
          />
          <Button
            iconButton
            icon={<Octicons name="person" size={30} />}
            variant="blank"
          />
        </View>
      </View>
    </View>
  )
}

export default MenuScreen
