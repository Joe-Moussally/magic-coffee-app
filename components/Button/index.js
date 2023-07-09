// ** React Imports
import React from "react"

// ** React Native Imports
import { Text, TouchableOpacity } from "react-native"

// ** Hooks Imports
import useTheme from "../../hooks/useTheme"

const iconButtonStyle = {
  width: 60,
  paddingVertical: 0,
  paddingHorizontal: 0,
  borderRadius: "50%"
}

const Button = ({
  label,
  iconButton,
  icon,
  variant = "filled", // filled - outlined - blank
  onPress = () => {},
  style
}) => {
  // ** Hooks
  const theme = useTheme()

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: variant === "blank" ? null : "#324A59",
        paddingHorizontal: 30,
        borderRadius: "50%",
        height: 60,
        display: "flex",
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        justifyContent: "center",
        ...(iconButton && iconButtonStyle),
        ...style
      }}
    >
      {!iconButton ? (
        <>
          {React.cloneElement(icon, { color: "white", size: 24 })}
          <Text style={{ color: "white", fontSize: 19, fontWeight: 700 }}>
            {label}
          </Text>
        </>
      ) : (
        React.cloneElement(icon, {
          color:
            variant === "blank"
              ? theme.pallete.text.light
              : theme.pallete.contrastText.light,
          size: 24
        })
      )}
    </TouchableOpacity>
  )
}

export default Button
