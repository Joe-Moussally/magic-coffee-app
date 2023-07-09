// ** React Imports
import React from "react"

// ** React Native Imports
import { View, Text, StyleSheet } from "react-native"

// ** Expo Imports
import { StatusBar } from "expo-status-bar"

// ** Hooks Imports
import useTheme from "../../../hooks/useTheme"

// ** Icons Imports
import { Ionicons } from "@expo/vector-icons"

// ** Component Imports
import Button from "../../../components/Button"
import Typography from "../../../components/Typography"
import { SafeAreaView } from "react-native-safe-area-context"
import UserScreenHeader from "../../../components/UserScreenHeader"
import Input from "../../../components/Input"

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
      <UserScreenHeader title="Sign In" secondaryTitle="Welcome Back" />

      <Input
        placeholder="Email Address"
        icon={<Ionicons name="ios-mail-outline" />}
        error
        errorMessage={"Required"}
      />
      <Input
        type="password"
        placeholder="Password"
        icon={<Ionicons name="md-lock-open-outline" />}
      />
    </SafeAreaView>
  )
}

export default SignInScreen
