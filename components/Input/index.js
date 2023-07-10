// ** React Imports
import React, { useState } from "react"

// ** React Native Imports
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from "react-native"

// ** Icons Imoprts
import { Feather } from "@expo/vector-icons"

// ** Hooks Imports
import useTheme from "../../hooks/useTheme"

const Input = ({
  type = "text",
  placeholder,
  icon,
  error,
  value,
  onChange = () => {},
  onBlur = () => {},
  onChangeText = () => {},
  containerStyle = {},
  rest
}) => {
  // ** States
  const [passwordShown, setPasswordShown] = useState(false)

  // ** Hooks
  const theme = useTheme()

  // ** Styles
  const styles = StyleSheet.create({
    mainContainer: {
      borderBottomColor: error
        ? theme.pallete.error.main
        : theme.pallete.gray.main,
      borderBottomWidth: 1,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      paddingVertical: 10,
      paddingHorizontal: 10
    },
    iconContainer: {
      borderRightWidth: 1,
      borderColor: theme.pallete.gray.main,
      paddingRight: 10
    },
    input: {
      fontSize: 18,
      color: theme.pallete.text.light,
      flex: 1,
      marginLeft: 10
    },
    errorMessage: {
      color: theme.pallete.error.main,
      fontSize: 12,
      marginBottom: 30,
      marginTop: 8
    }
  })

  const handleToggleShowPassword = () => setPasswordShown((prev) => !prev)

  return (
    <>
      <View
        style={{
          ...styles.mainContainer,
          ...containerStyle
        }}
      >
        {icon && (
          <View style={styles.iconContainer}>
            {React.cloneElement(icon, {
              color: theme.pallete.text.light,
              size: 25
            })}
          </View>
        )}
        <TextInput
          style={styles.input}
          secureTextEntry={type === "password" && !passwordShown}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          onChangeText={onChangeText}
          value={value}
          {...rest}
        />

        {/* Show/Hide Password Button */}
        {type === "password" && (
          <TouchableOpacity onPress={handleToggleShowPassword}>
            <Feather
              color={theme.pallete.text.light}
              name={passwordShown ? "eye-off" : "eye"}
              size={20}
            />
          </TouchableOpacity>
        )}
      </View>
      <Text style={styles.errorMessage}>{error}</Text>
    </>
  )
}

export default Input
