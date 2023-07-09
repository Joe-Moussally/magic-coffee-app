import React from "react"
import { View, Text } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import Button from "../Button"
import Typography from "../Typography"

const UserScreenHeader = ({ title, hideBackButton }) => {
  const navigation = useNavigation()
  const handleBack = () => {
    navigation.pop()
  }
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 30,
        marginBottom: 30,
        height: 65
      }}
    >
      {!hideBackButton && (
        <Button
          icon={<AntDesign name="left" />}
          iconButton
          variant="blank"
          onPress={handleBack}
        />
      )}
      <Typography title>{title}</Typography>
    </View>
  )
}

export default UserScreenHeader
