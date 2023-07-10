// ** React Imports
import React, { useState } from "react"

// ** React Native Imports
import { View, Text, StyleSheet } from "react-native"

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
  // ** States
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")
  // const [errors, setErrors] = useState({})

  // ** Hooks
  const theme = useTheme()

  // ** Styles
  const styles = StyleSheet.create({
    screenContainer: {
      paddingVertical: theme.spacing.screenPaddingVertical,
      paddingHorizontal: theme.spacing.screenPaddingHorizontal
    },
    formContainer: {
      marginHorizontal: 20
    }
  })

  const handleLogin = async (values) => {
    try {
      await validationSchema.validate(values)
      // Validation successful, perform login or submit form
      // You can add your own logic here
      Alert.alert("Success", "Form submitted successfully")
    } catch (error) {
      // Validation failed, display error message
      Alert.alert("Error", error.message)
    }
  }

  return (
    <SafeAreaView style={styles.screenContainer}>
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
              style={{
                marginTop: "auto",
                marginBottom: "20%",
                marginLeft: "auto",
                marginRight: 30
              }}
              icon={<AntDesign name="arrowright" />}
              iconButton
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>
      <Button label="Forgot Password?" variant="link" />
    </SafeAreaView>
  )
}

export default SignInScreen
