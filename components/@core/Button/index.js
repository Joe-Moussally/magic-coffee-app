// ** React Imports
import React from "react"

// ** React Native Imports
import { TouchableOpacity } from "react-native"

// ** Hooks Imports
import useTheme from "../../../hooks/useTheme"

// ** Components Imports
import Typography from "../Typography"

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
  iconSize = 29,
  iconPosition = "left", // left - right
  variant = "filled", // filled - outlined - blank - link
  onPress = () => {},
  style
}) => {
  // ** Hooks
  const theme = useTheme()

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor:
          variant === "blank" || variant === "link" ? null : "#324A59",
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
          {icon &&
            iconPosition === "left" &&
            React.cloneElement(icon, { color: "white", size: iconSize })}
          <Typography
            style={{
              color:
                variant === "link" || variant === "blank"
                  ? theme.pallete.text.main
                  : theme.pallete.contrastText.main,
              fontSize: 19,
              textDecorationLine: variant === "link" ? "underline" : null
            }}
          >
            {label}
          </Typography>
          {icon &&
            iconPosition === "right" &&
            React.cloneElement(icon, { color: "white", size: iconSize })}
        </>
      ) : (
        React.cloneElement(icon, {
          color:
            variant === "blank"
              ? theme.pallete.text.light
              : theme.pallete.contrastText.light,
          size: iconSize
        })
      )}
    </TouchableOpacity>
  )
}

export default Button
