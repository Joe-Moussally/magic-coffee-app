// ** React Imports
import React from "react"

// ** React Native Imports
import { View, Text, StyleSheet } from "react-native"

// ** Expo Imports
import { StatusBar } from "expo-status-bar"

// ** Hooks Imports
import useTheme from "../../../hooks/useTheme"

// ** Icons Imports
import { AntDesign } from "@expo/vector-icons"

// ** Component Imports
import Button from "../../../components/Button"
import Typography from "../../../components/Typography"
import { SafeAreaView } from "react-native-safe-area-context"
import UserScreenHeader from "../../../components/UserScreenHeader"

const SignInScreen = () => {
  // ** Hooks
  const theme = useTheme()

  const styles = StyleSheet.create({
    screenContainer: {
      padding: theme.spacing.screenPadding
    }
  })

  return (
    <SafeAreaView style={styles.screenContainer}>
      <StatusBar style="dark" />
      <UserScreenHeader title="Sign In" />
      <Typography>ASD</Typography>
    </SafeAreaView>
  )
}

export default SignInScreen
