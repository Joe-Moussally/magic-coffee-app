// ** React Imports
import React from "react"

// ** React Native Imports
import { View, StyleSheet, Platform, KeyboardAvoidingView } from "react-native"

// ** Expo Imports
import { StatusBar } from "expo-status-bar"

// ** Hooks Imports
import useTheme from "../../../hooks/useTheme"

// ** Icons Imports
import { Ionicons, AntDesign } from "@expo/vector-icons"

// ** Form Validation
import * as yup from "yup"
import { Formik } from "formik"

// ** Component Imports
import Button from "../../../components/Button"
import Input from "../../../components/Input"
import Typography from "../../../components/Typography"
import { SafeAreaView } from "react-native-safe-area-context"
import UserScreenHeader from "../../../components/UserScreenHeader"

// ** Sign In Schema
const validationSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required")
})

const SignInScreen = () => {
  // ** Hooks
  const theme = useTheme()

  // ** Styles
  const styles = StyleSheet.create({
    screenContainer: {
      paddingVertical: theme.spacing.screenPaddingVertical,
      paddingHorizontal: theme.spacing.screenPaddingHorizontal,
      flex: 1
    },
    formContainer: {
      marginHorizontal: 20
    },
    newMemberView: {
      display: "flex",
      marginTop: "auto",
      flexDirection: "row",
      alignItems: "center"
    }
  })

  const handleLogin = async (values) => {
    try {
      await validationSchema.validate(values)
      console.log("SUCCESS")
    } catch (error) {
      // Validation failed, display error message
      Alert.alert("Error", error.message)
    }
  }

  return (
    <SafeAreaView style={styles.screenContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
      >
        <StatusBar style="dark" />
        <UserScreenHeader title="Sign In" secondaryTitle="Welcome Back" />
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <View style={styles.formContainer}>
              <Input
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                keyboardType="email-address"
                autoCapitalize="none"
                value={values.email}
                error={errors.email}
                placeholder="Email Address"
                icon={<Ionicons name="ios-mail-outline" />}
              />

              <Input
                placeholder="Password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                error={errors.password}
                type="password"
                icon={<Ionicons name="md-lock-open-outline" />}
              />
              <Button
                label="Forgot Password?"
                variant="link"
                style={{ marginBottom: 40 }}
              />
              <Button
                style={{
                  marginTop: "auto",
                  marginBottom: "20%",
                  marginLeft: "auto",
                  marginRight: 30
                }}
                icon={<AntDesign name="arrowright" size={10} />}
                label="Sign In"
                onPress={handleSubmit}
                iconPosition="right"
              />
            </View>
          )}
        </Formik>

        {/* New member */}
        <View style={styles.newMemberView}>
          <Typography fontSize={18} style={{ color: theme.pallete.gray.main }}>
            New memeber?
          </Typography>
          <Button variant="link" label="Sign Up" />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default SignInScreen
